// checks if all fields(array) are present in a tabel(as column names) and returns wrong fields message(string)

import { asyncHandler } from '../middlewares/asyncHandler';
import { executeSql } from './executeSql';

export const checkTableColumns = async (
  tableName: string,
  fields: string[]
) => {
  let query: string = `DESC ${tableName}`;

  let tableColumns: any = await executeSql(query);
  tableColumns = tableColumns.map((obj: any) => obj.Field);

  let wrongFieldNames: string[] = [];
  fields.forEach((field: string) => {
    if (!tableColumns.includes(field)) {
      wrongFieldNames.push(field);
    }
  });

  let message: string = '';
  if (wrongFieldNames.length > 0) {
    message = `Fields don't exist - { ${wrongFieldNames.join(', ')} }.`;
  }
  return message;
};
