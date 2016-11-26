import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat,
  validateNumber
} from 'ember-changeset-validations/validators';

export default {
  username: [
    validatePresence({
      presence: true,
      message: 'Se requiere nombre de usuario'
    }),
    validateLength({
      min: 6,
      message: ' Nombre de usuario demasiado corto'
    })
  ],
  email: [
    validatePresence({
      presence: true,
      message: 'Email requerido'
    }),
    validateFormat({
      type: 'email',
      message: ' Email no válido'
    })
  ],
  phone: [
    validateNumber({
      integer: true,
      positive: true,
      message: ' Número no válido'
    })
  ],

  password: [
    validatePresence({
      presence: true,
      message: 'Password requerido'
    }),
    validateLength({
      min: 6,
      message: ' Password muy corto'
    })
  ],
  passwordConfirmation: validateConfirmation({
    on: 'password',
    message: 'Password no es coincidente'
  }),
  name: validatePresence({
    presence: true,
    message: ' Nombre de cliente requerido'
  }),
  identification: validatePresence({
    presence: true,
    message: ' Identificación requerida'
  })
};
