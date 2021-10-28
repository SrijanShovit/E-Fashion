import bcrypt from 'bcrypt';

export const getHash = async (password: string) => {
  return await bcrypt.hash(password, await bcrypt.genSalt(10));
};

export const matchPassword = async (
  enteredPassword: string,
  password: string
) => {
  return await bcrypt.compare(enteredPassword, password);
};
