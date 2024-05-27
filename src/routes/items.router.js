import express from 'express';
import { itemPrisma } from '../utils/prisma/index.js';

const router = express.Router();

/* 아이템 생성 API */
router.post('/items', async (req, res, next) => {
  try {
    const { item_name, item_stat, item_price } = req.body;

    const isExistItem = await itemPrisma.items.findFirst({
      where: { item_name: item_name },
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
        Item_Code: item.item_code,
        health: item_stat.health,
        power: item_stat.power,
      },
    });

    const data = await itemPrisma.items.findFirst({
      where: {
        item_code: item.item_code,
      },
      select: {
        item_code: true,
        item_name: true,
        item_price: true,
        item_stat: {
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

/* 아이템 수정 API */
router.patch('/items/:item_code', async (req, res, next) => {
    try {
        const { item_name, item_stat} = req.body;
        const {item_code} = req.params;
    
      const Item = await itemPrisma.items.findFirst({
        where: { item_code: +item_code },
      });
  
      if (!Item) {
        return res.status(409).json({ message: '아이템이 존재하지 않습니다.' });
      }
  
    await itemPrisma.items.update({
        where: {
            item_code: +item_code,
        },
        data: {
          item_name: item_name,
        },
      });
  
      await itemPrisma.itemStats.update({
        where: {
            Item_Code: +item_code,
        },
        data: {
          health: item_stat.health,
          power: item_stat.power,
        },
      });
  
      const data = await itemPrisma.items.findFirst({
        where: {
          item_code: +item_code,
        },
        select: {
          item_code: true,
          item_name: true,
          item_stat: {
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


/* 아이템 전체 조회 API */
router.get('/items', async (req, res, next) => {
    try {    
      const data = await itemPrisma.items.findMany({
        select: {
          item_code: true,
          item_name: true,
          item_price: true
          },
        },
      );
  
      return res.status(200).json({ data: data });
    } catch (err) {
      next(err);
    }
  });

/* 아이템 상세 조회 API */
router.get('/items/:item_code', async (req, res, next) => {
    try {
        const {item_code} = req.params;    
      const data = await itemPrisma.items.findFirst({
        where:{
            item_code : +item_code
        },
        select: {
          item_code: true,
          item_name: true,
          item_stat: {
            select: {
              health: true,
              power: true,
            },
          },
          item_price: true
        },
    })
  
      return res.status(200).json({ data: data });
    } catch (err) {
      next(err);
    }
  });

export default router;
