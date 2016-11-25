import{
  	validatePresence,
  	validateLength
}from 'ember-changeset-validations/validators';

export default {
  	username: [
	    validatePresence({presence:true, message: 'Se requiere nombre de usuario'})
  	],
  	password: [
	    validatePresence({presence:true, message: 'Password requerido'}),
	    validateLength({min: 6, message: 'Password muy corto'})
  	]
};