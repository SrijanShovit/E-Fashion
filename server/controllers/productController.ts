import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { executeSql } from '../helpers/executeSql';
import { checkTableColumns } from '../helpers/checkTableColumns';
import { AppError } from '../utils/error';

export const getProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let query = `SELECT * FROM products`;
    let products: any = await executeSql(query);

    res.json({
      status: 'pass',
      message: `${products.length} product${
        products.length == 1 ? '' : 's'
      } found.`,
      data: products,
    });
    return next();
  }
);

export const addProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let message: string = await checkTableColumns(
      'users', // table name
      Object.keys(req.body) // fields to be checked
    );
    if (message.length > 0) {
      return next(new AppError(message));
    }

    let query: string = `INSERT INTO product SET ?`;
    req.body.forEach(async (prod: any) => {
      await executeSql(query, prod);
    });

    res.json({
      status: 'pass',
      message: 'Products added successfully.',
      data: null,
    });
    return next();
  }
);
