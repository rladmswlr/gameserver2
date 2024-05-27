// src/utils/prisma/index.js

import { PrismaClient as UserPrismaClient} from '../../../prisma/user/index.js';
import { PrismaClient as ItemPrismaClient} from '../../../prisma/item/index.js';

export const itemPrisma = new ItemPrismaClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});

export const userPrisma = new UserPrismaClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});