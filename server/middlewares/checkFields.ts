// checks if all fields(array) are present in the body(object) and returns wrong fields in message(string)

export const checkFields = (body: any, fields: string[]) => {
  let message = '',
    reqFields: string[] = [];
  fields.forEach((field) => {
    if (!body.hasOwnProperty(field) || body[field] == '') {
      reqFields.push(field);
    }
  });

  if (reqFields.length > 0) {
    message = `Please provide { ${reqFields.join(', ')} }`;
  }

  return message;
};
