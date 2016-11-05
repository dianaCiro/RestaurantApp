import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  username: [
    validatePresence(true),
    validateLength({ min: 6 })
  ],
  nameClient: validatePresence(true),
  lastname: validatePresence(true),
  idClient: validatePresence(true),
  email: validateFormat({ type: 'email' }),
  password: validateLength({ min: 8 }),
  phone: validatePresence(true),
  cellphone: validatePresence(true)
};
