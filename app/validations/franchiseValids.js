import {
  validatePresence,
  validateLength,
  validateNumber,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name_franchise: [
    validatePresence({
      presence: true,
      message: 'Se requiere nombre de franquicia'
    }),
    validateLength({
      max: 20,
      message: ' Nombre de franquicia demasiado largo'
    })
  ],
  id_restaurant: [
    validatePresence({
      presence: true,
      message: 'Id de restaurante de la nueva franquicia requerido'
    }),
    validateNumber({
      integer: true,
      positive: true,
      message: ' Id no válido'
    })

  ],
  address: [
    validatePresence({
      presence: true,
      message: 'Se requiere la dirección de la franquicia'
    }),

  ],
  phone: [
     validateNumber({
      integer: true,
      positive: true,
      message: ' Número no válido'
    })
  ],
  latitude: [
     validateNumber({
      integer: true,
      positive: true,
      message: ' Latitud no válida'
    })
  ],
  longitude: [
     validateNumber({
      integer: true,
      positive: true,
      message: ' Longitud no válida'
    })
  ],
  description: [
    validateLength({
      max: 140,
      allowBlank: true,
      message: 'La descripción excede el número máximo de carácteres permitidos'
    })
  ]
}
