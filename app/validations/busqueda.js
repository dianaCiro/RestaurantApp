import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat,
  validateNumber
} from 'ember-changeset-validations/validators';

export default {

  price: [
    validateNumber({
      integer: true,
      positive: true,
      message: ' Ingrese un precio válido'
    })
  ]

};
