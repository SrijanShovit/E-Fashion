import { Request, Response, NextFunction } from 'express';
import { db } from '../config/db';
import { asyncHandler } from '../middlewares/asyncHandler';

export const signup = (req: Request, res: Response, next: NextFunction) => {
  let query = `INSERT INTO users SET ?`;
  db.query(query, req.body, (err: any, result: any) => {
    if (err) throw err;
  });
  res.json({ status: 'pass', message: 'Registered successfully.' });
};

export const login = (req: Request, res: Response, next: NextFunction) => {};
