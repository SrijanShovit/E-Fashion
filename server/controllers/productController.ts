import { Request, Response, NextFunction } from 'express';
import { db } from '../config/db';
import { asyncHandler } from '../middlewares/asyncHandler';

export const getProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    db.query(`SELECT * FROM product`, (err: any, result: any) => {
      if (err) throw err;
      res.json({ status: 'pass', count: result.length, data: result });
    });
  }
);

export const addProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    db.query(`INSERT INTO product SET ?`, req.body, (err, result) => {
      if (err) throw err;
      res.json({ status: 'pass', data: result });
    });
  }
);
