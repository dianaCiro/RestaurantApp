import{
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
}from 'ember-changeset-validations/validators';

console.log('entro a validaciones');

export default {
  username: [
  validatePresence({presence:true, message: 'Se requiere nombre de usuario'}),
  validateLength({min: 6, message: 'Tamaño del nombre de usuario corto'})
  ],
  nameClient: validatePresence({presence: true, message: 'Nombre de cliente requerido'}),
  lastname: validatePresence({presence: true, message: 'Apellidos requeridos'}),
  idClient: validatePresence({presence: true, message:'Número de documento requerido'}),
  email: [
  validatePresence({presence: true, message: 'Email requerido'}),
  validateFormat({type: 'email', message: 'Email no valido'})
  ],
  password: [
  validatePresence({presence:true, message: 'Password requerido'}),
  validateLength({min: 6, message: 'Password muy corto'})
  ],
  passwordConfirmation: validateConfirmation({on: 'password', message: 'Password no es coincidente'})
};
