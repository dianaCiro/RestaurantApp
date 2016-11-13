import{
  validatePresence,
  validateLength,
  validateNumber,
  validateFormat
}from 'ember-changeset-validations/validators';

export default{
  name_restaurant:[
      validatePresence(true),
      validateLength({max:20})
  ],
  email:[
      validateFormat({type:'email'}),
      validateLength({max:40}),
      validatePresence(true)
  ],
  admin:[
      validatePresence(true),
      validateNumber({integer:true,positive:true})
  ],
  description:[
      validateLength({max:140,allowBlank:true})
  ]
}
