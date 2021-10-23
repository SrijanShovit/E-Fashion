import { Request, Response, NextFunction } from 'express';
import { db } from '../config/db';
import { asyncHandler } from '../middlewares/asyncHandler';

export const signup = (req: Request, res: Response, next: NextFunction) => {
  let query = `INSERT INTO users SET ?`;
  db.query(query, req.body, (err: any, result: any) => {
    if (err) throw err;
    res.json({
      status: 'pass',
      message: 'Registered successfully.',
    });
  });
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  let query = `SELECT * FROM users WHERE email=? AND password=?`;
  db.query(
    query,
    [req.body.email, req.body.password],
    (err: any, result: any) => {
      if (err) throw err;
      if (result.length == 0) {
        return res.json({
          status: 'fail',
          message: 'Wrong credentials.',
          data: null,
        });
      }
      result[0].password = undefined;
      res.json({ status: 'pass', message: 'Login succesfull.', data: result });
    }
  );
};
