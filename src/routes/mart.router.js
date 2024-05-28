import express from 'express';
import { itemPrisma, userPrisma } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

/* 아이템 구매 API */
router.post('/buy/:characterId', authMiddleware, async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { item_code, count } = req.body;
    const { characterId } = req.params;

    //아이템 존재 확인
    const item = await itemPrisma.items.findFirst({
      where: { item_code: +item_code },
    });
    if (!item) {
      return res.status(409).json({ message: '존재하지 않는 아이템입니다.' });
    }

    //캐릭터 존재 확인
    const character = await userPrisma.characters.findFirst({
      where: {
        characterId: +characterId,
        UserId: +userId,
      },
    });
    if (!character) {
      return res.status(409).json({ message: '존재하지 않는 캐릭터입니다.' });
    }

    //인벤토리에 해당하는 아이템이 이미 존재하는지 확인
    const isItem = await userPrisma.inventory.findFirst({
      where: {
        CharacterId: character.characterId,
        item_code: item_code,
      },
    });

    //아이템 가격 * 갯수가 캐릭터가 가지고 있는 돈의 수보다 작아야함
    if (item.item_price * count < character.money) {
      //현재 가진 돈구해주는 수
      const nowcharactermoney = character.money - count * item.item_price;
      //인벤토리에 아이템이 없을시
      if (!isItem) {
        //인벤토리에 아이템을 생성해준다.
        await userPrisma.inventory.create({
          data: {
            CharacterId: character.characterId,
            count: count,
            item_code: item_code,
          },
        });
      } else {
        //인벤토리에 아이템이 있다면 업데이트를 통해 count만 올려줌
        await userPrisma.inventory.update({
          where: {
            item_code: item_code,
            CharacterId: character.characterId,
            inventoryId: isItem.inventoryId,
          },
          data: {
            count: count + isItem.count,
          },
        });
      }
      await userPrisma.characters.update({
        where: {
          characterId: +characterId,
          UserId: +userId,
        },
        data: {
          money: nowcharactermoney,
        },
      });

      return res.status(200).json({ item_code: item_code, count: count });
    } else {
      return res.status(409).json({ message: '돈이 부족합니다.' });
    }
  } catch (err) {
    next(err);
  }
});

/* 아이템 판매 API */
router.patch('/sell/:characterId', authMiddleware, async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { item_code, count } = req.body;
    const { characterId } = req.params;

    //아이템 존재 확인
    const item = await itemPrisma.items.findFirst({
      where: { item_code: +item_code },
    });
    if (!item) {
      return res.status(409).json({ message: '존재하지 않는 아이템입니다.' });
    }

    //캐릭터 존재 확인
    const character = await userPrisma.characters.findFirst({
      where: {
        characterId: +characterId,
        UserId: +userId,
      },
    });
    if (!character) {
      return res.status(409).json({ message: '존재하지 않는 캐릭터입니다.' });
    }

    //인벤토리에 해당하는 아이템이 존재하는지 확인
    const isItem = await userPrisma.inventory.findFirst({
      where: {
        CharacterId: character.characterId,
        item_code: item_code,
      },
    });

    //인벤토리에 아이템이 있을시
    if (isItem) {
      if (isItem.count - count >= 0) {
        const changemoney = item.item_price * count * 0.6;

        //인벤토리에 아이템을 생성해준다.
        await userPrisma.inventory.update({
          where: {
            CharacterId: character.characterId,
            item_code: item_code,
            inventoryId: isItem.inventoryId,
          },
          data: {
            count: isItem.count - count,
          },
        });

        await userPrisma.characters.update({
          where: {
            characterId: character.characterId,
            UserId: +userId,
          },
          data: {
            money: character.money + changemoney,
          },
        });

        return res.status(200).json({
            message: `아이템을 팔아 ${changemoney}원이 지급 되었습니다.`,
          });
      }

      else{
        return res.status(409).json({ message: '아이템의 갯수가 부족합니다.' });
      }
    }
    //아이템이 없을 시
    else {
      return res.status(409).json({ message: '아이템이 없습니다.' });
    }
  } catch (err) {
    next(err);
  }
});


/* 돈 벌기 API */
router.patch('/money/:characterId', authMiddleware, async (req, res, next) => {
    try {
      const { userId } = req.user;
      const { characterId } = req.params;
  
      //캐릭터 존재 확인
      const character = await userPrisma.characters.findFirst({
        where: {
          characterId: +characterId,
          UserId: +userId,
        },
      });
      if (!character) {
        return res.status(409).json({ message: '존재하지 않는 캐릭터입니다.' });
      }
    
      //돈을 업데이트 해준다.
      await userPrisma.characters.update({
        where:{
            characterId: +characterId,
            UserId: +userId,
        },
        data:{
            money: character.money + 100
        }
      })

      return res.status(200).json({message: `돈이 ${character.money + 100}원이 되었습니다.`})
    } catch (err) {
      next(err);
    }
  });


export default router;
