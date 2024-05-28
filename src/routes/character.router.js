import express from 'express';
import { itemPrisma, userPrisma } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

/* 아이템 장착 API */
router.post('/equip/:characterId', authMiddleware, async (req, res, next) => {
  try {
    const { item_code } = req.body;
    const { userId } = req.user;
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

    if (!isItem) {
      return res
        .status(409)
        .json({ message: '인벤토리에 아이템이 존재하지 않습니다.' });
    } else if (isItem.count <= 0) {
      return res
        .status(409)
        .json({ message: '인벤토리에 아이템이 존재하지 않습니다.' });
    }

    //아이템을 이미 장착하였는지 확인
    const isEquip = await userPrisma.equipItems.findFirst({
      where: {
        CharacterId: character.characterId,
        item_code: item_code,
      },
    });

    if (isEquip) {
      return res.status(409).json({ message: '이미 장착한 아이템입니다' });
    }

    await userPrisma.equipItems.create({
      data: {
        CharacterId: character.characterId,
        item_code: item_code,
      },
    });

    //아이템을 이미 장착하였는지 확인
    const itemstat = await itemPrisma.itemStats.findFirst({
      where: {
        Item_Code: item_code,
      },
    });

    await userPrisma.characters.update({
      where: {
        characterId: character.characterId,
        UserId: +userId,
      },
      data: {
        health: character.health + itemstat.health,
        power: character.power + itemstat.power,
      },
    });

    await userPrisma.inventory.update({
      where: {
        CharacterId: character.characterId,
        inventoryId: isItem.inventoryId,
        item_code: item_code,
      },
      data: {
        count: isItem.count - 1,
      },
    });
  } catch (err) {
    next(err);
  }
});

/* 아이템 탈착 API */
router.delete('/equip/:characterId', authMiddleware, async (req, res, next) => {
    try {
      const { item_code } = req.body;
      const { userId } = req.user;
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

  
      //아이템을 이미 장착하였는지 확인
      const isEquip = await userPrisma.equipItems.findFirst({
        where: {
          CharacterId: character.characterId,
          item_code: item_code,
        },
      });
  
      if (!isEquip) {
        return res.status(409).json({ message: '이미 장착한 아이템입니다' });
      }
  
      await userPrisma.equipItems.delete({
        where: {
        equipItemId:isEquip.equipItemId,
          CharacterId: character.characterId,
          item_code: item_code,
        },
      });
  
      //아이템 스탯 정보
      const itemstat = await itemPrisma.itemStats.findFirst({
        where: {
          Item_Code: item_code,
        },
      });
  
      await userPrisma.characters.update({
        where: {
          characterId: character.characterId,
          UserId: +userId,
        },
        data: {
          health: character.health - itemstat.health,
          power: character.power - itemstat.power,
        },
      });
  
      await userPrisma.inventory.update({
        where: {
          CharacterId: character.characterId,
          inventoryId: isItem.inventoryId,
          item_code: item_code,
        },
        data: {
          count: isItem.count + 1,
        },
      });

      return res.status(200).json({result:`무사히 아이템 (${item.item_name})을 장착해제하였습니다.`})
    } catch (err) {
      next(err);
    }
  });


/* 인벤토리 아이템 확인 API */
router.get('/inventory/:characterId', authMiddleware, async (req, res, next) => {
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
      
      const inventory = await userPrisma.characters.findMany({
        where:{
            characterId: +characterId,
            UserId: +userId,
        },
        select:{
            Inventory:{
                select:{
                    item_code:true,
                    count:true
                }
            }
        }
      });
      
      return res.status(200).json({data: inventory});

    } catch (err) {
      next(err);
    }
  });

/* 장착한 아이템 확인 API */
router.get('/equip/:characterId',  async (req, res, next) => {
    try {
      const { characterId } = req.params;
  
      //캐릭터 존재 확인
      const character = await userPrisma.characters.findFirst({
        where: {
          characterId: +characterId
        },
      });
      if (!character) {
        return res.status(409).json({ message: '존재하지 않는 캐릭터입니다.' });
      }
      
      const EquipItems = await userPrisma.characters.findMany({
        where:{
            characterId: +characterId,
        },
        select:{
            EquipItems:{
                select:{
                    item_code:true,
                }
            }
        }
      });
      
      return res.status(200).json({data: EquipItems});

    } catch (err) {
      next(err);
    }
  });


export default router;
