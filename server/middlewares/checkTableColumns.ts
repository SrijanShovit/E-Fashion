// checks if all fields(array) are present in a tabel(as column names) and returns wrong fields message(string)

import { db } from '../config/db';

export const checkTableColumns = (tableName: string, fields: string[]) => {
  let query: string = `DESC ${tableName}`;
  db.query(query, (err: any, result: any) => {
    let message = '';
    let tableColumns: string[];
    if (err) throw err;
    result;
    tableColumns = result.map((obj: any) => obj.Field);

    let wrongFieldNames: string[] = [];
    fields.forEach((field: string) => {
      if (!tableColumns.includes(field)) {
        wrongFieldNames.push(field);
      }
    });

    if (wrongFieldNames.length > 0) {
      message += `Fields don't exist - { ${wrongFieldNames.join(', ')} }.`;
    }
    return message;
  });
};
