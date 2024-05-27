import express from 'express';
import { itemPrisma } from '../utils/prisma/index.js';

const router = express.Router();

/* 아이템 생성 API */
router.post('/items', async (req, res, next) => {
    try {
      const {item_name, item_stat, item_price } = req.body;
    
      const isExistItem = await userPrisma.items.findFirst({
        where: { item_name },
      });

      if (isExistItem) {
        return res.status(409).json({ message: '이미 존재하는 아이템 이름입니다.' });
      }

      const item = await itemPrisma.items.create({
        data: {
          item_name: item_name,
          item_price: item_price,
        },
      });
  
      await itemPrisma.itemStats.create({
        data: {
          ItemCode: item.itemCode,
          health: item_stat.health,
          power: item_stat.power,
        },
      });
  
      const data = await itemPrisma.items.findFirst({
        where: {
          itemCode: item.itemCode,
        },
        select: {
          itemCode: true,
          itemName: true,
          itemPrice: true,
          itemStat: {
            select: {
              health: true,
              power: true,
            },
          },
        },
      });
  
      return res.status(200).json({ data: data });
    } catch (err) {
      next(err);
    }
  });
  


export default router;