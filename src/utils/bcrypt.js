import bcrypt from "bcrypt";

export const encrypt =(password) => {
  //encryptar contraseña
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

export const compare = (newpassword, password) => {
  //comparar contraseñas
  return bcrypt.compareSync(newpassword, password);
};
