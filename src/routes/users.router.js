import express from 'express';
import { userPrisma } from '../utils/prisma/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Prisma } from '@prisma/client';

const router = express.Router();

/* 사용자 회원가입 API */
router.post('/sign-up', async (req, res, next) => {
  try {
    const { id, password, passwordCheck, name } = req.body;

    //아이디 중복체크 확인 부분
    const isExistUser = await userPrisma.users.findFirst({
      where: { id },
    });
    if (isExistUser) {
      return res.status(409).json({ message: '이미 존재하는 아이디 입니다.' });
    }

    const vaildId = /^[a-z0-9]+$/;
    if (!vaildId.test(id)) {
      return res
        .status(400)
        .json({ message: '아이디는 영어 소문자와 숫자만 사용할 수 있습니다.' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: '비밀번호는 최소 6자 이상이어야 합니다.' });
    }

    if (password != passwordCheck) {
      return res
        .status(400)
        .json({ message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' });
    }

    //비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    //비밀번호는 암호화된 비밀번호로 저장
    const user = await userPrisma.$transaction(
      async (tx) => {
        const user = await tx.users.create({
          data: {
            id,
            password: hashedPassword, // 암호화된 비밀번호를 저장합니다.
            name,
          },
        });

        return user;
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      }
    );

    return res.status(201).json({ message: '회원가입이 완료 되었습니다.' });
  } catch (err) {
    next(err);
  }
});

/* 사용자 로그인 API */
router.post('/sign-in', async (req, res, next) => {
  try {
    const { id, password } = req.body;

    const user = await userPrisma.users.findFirst({ where: { id } });

    if (!user) {
      return res.status(401).json({ message: '존재하지 않는 아이디입니다.' });
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    const token = jwt.sign(
      {
        userId: user.userId,
      },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.cookie('authorization', `Bearer ${token}`);
    //res.header('authorization', `Bearer ${token}`);
    
    return res.status(200).json({ message: '로그인 성공했습니다.' });
  } catch (err) {
    next(err);
  }
});

/* 사용자 조회 API */
router.get('/users', authMiddleware, async (req, res, next) => {
  try {
    const { userId } = req.user;

    const user = await userPrisma.users.findFirst({
      where: { userId: +userId },
      //특정 컬럼만 조회하는 파라미터
      select: {
        userId: true,
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        Characters: {
          select: {
            name: true,
            health: true,
            power: true,
            money: true,
          },
        },
      },
    });

    return res.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
});

/* 캐릭터 생성 API */
router.post('/characters', authMiddleware, async (req, res, next) => {
  try {
    const { name } = req.body;
    const { userId } = req.user;

    //아이디 중복체크 확인 부분
    const isExistCharacter = await userPrisma.characters.findFirst({
      where: { name },
    });
    if (isExistCharacter) {
      return res.status(409).json({ message: '이미 존재하는 닉네임 입니다.' });
    }
    const newCharacter = await userPrisma.characters.create({
      data: {
        UserId: userId,
        name: name,
        health: 500,
        power: 100,
        money: 10000,
      },
    });

    return res.status(200).json({ newCharacterId: newCharacter.characterId });
  } catch (err) {
    next(err);
  }
});

//캐릭터 삭제 API(JWT 인증 필요)**
//입문 과제에서 했던 것과 동일하게 캐릭터를 삭제하는 API가 필요합니다.
//내 계정에 있는 캐릭터가 아니라면 삭제시키면 안되겠죠?

router.delete(
  '/characters/:characterId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { characterId } = req.params;
      const { userId } = req.user;

      const ischaracter = await userPrisma.characters.findFirst({
        where: {
          characterId: +characterId,
          UserId: +userId,
        },
      });

      if (!ischaracter) {
        return res
          .status(404)
          .json({ errorMessage: '캐릭터가 존재하지 않습니다.' });
      }

      await userPrisma.characters.delete({
        where: { characterId: +characterId },
      });

      return res.status(200).json({ Message: `캐릭터가 삭제되었습니다.` });
    } catch (err) {
      next(err);
    }
  }
);

router.get('/characters/:characterId', async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const { authorization } = req.cookies;

    console.log(authorization);

    //로그인을 안한경우
    if (!authorization ) {
      const character = await userPrisma.characters.findFirst({
        where: {
          characterId: +characterId,
        },
      });

      if (!character) {
        return res
          .status(404)
          .json({ errorMessage: '캐릭터가 존재하지 않습니다.' });
      }

      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
      });
    }

    // 로그인 한 경우
    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
      return res.status(401).json({ message: '토큰 타입이 일치하지 않습니다.' });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;

    const character = await userPrisma.characters.findFirst({
      where: {
        characterId: +characterId,
      },
    });

    if (!character) {
      return res.status(404).json({ message: '캐릭터를 찾을 수 없습니다.' });
    }

    // 내 캐릭터 조회
    if (character.UserId === userId) {
      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
        money: character.money,
      });
    } else {
      // 다른 유저가 조회
      return res.status(200).json({
        name: character.name,
        health: character.health,
        power: character.power,
      });
    }
  } catch (err) {
    next(err);
  }
});

export default router;
