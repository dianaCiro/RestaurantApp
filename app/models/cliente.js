import DS from 'ember-data';

var cliente = DS.Model.extend({
	username: DS.attr(),
	nameClient: DS.attr(),
	lastname: DS.attr(),
	idClient: DS.attr(),
	email: DS.attr(),
	password: DS.attr(),
	phone: DS.attr(),
	cellphone: DS.attr()
});

export default cliente;