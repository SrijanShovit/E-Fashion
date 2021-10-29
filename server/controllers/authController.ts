import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { checkFields } from '../helpers/checkFields';
import { AppError } from '../utils/error';
import { executeSql } from '../helpers/executeSql';
import { checkTableColumns } from '../helpers/checkTableColumns';
import { getHash, matchPassword } from '../helpers/hashing';

export const signup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let message: string = await checkTableColumns(
      'users', // table name
      Object.keys(req.body) // fields to be checked
    );
    if (message.length > 0) {
      return next(new AppError(message));
    }

    // check if fields are present in body and return message
    message = checkFields({ ...req.body }, ['name', 'email', 'password']);
    if (message.length > 0) {
      return next(new AppError(message));
    }

    let query: string = `SELECT * FROM users WHERE email=?`;
    let user: any = await executeSql(query, [req.body.email]);
    if (user.length > 0) {
      return next(
        new AppError(
          `Email already registered. Please login with your credentials.`
        )
      );
    }

    // hash password
    req.body.password = await getHash(req.body.password);
    query = `INSERT INTO users SET ?`;
    await executeSql(query, req.body);

    res.json({
      status: 'pass',
      message: 'Registered successfully.',
      data: null,
    });
    return next();
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let message = checkFields({ ...req.body }, ['email', 'password']);
    if (message.length > 0) {
      return next(new AppError(message));
    }

    let query: string = `SELECT * FROM users WHERE email=?`;
    let user: any = await executeSql(query, [req.body.email]);

    if (
      user.length == 0 ||
      !(await matchPassword(req.body.password, user[0].password))
    ) {
      return next(new AppError(`Wrong credentials.`));
    }
    user[0].password = undefined;

    res.json({
      status: 'pass',
      message: 'Login successfull.',
      data: user[0],
    });
    return next();
  }
);
