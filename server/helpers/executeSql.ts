import { db } from '../config/db';

export const executeSql = (query_str: string, query_vars?: any) => {
  return new Promise((resolve, reject) => {
    db.query(query_str, query_vars, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};
