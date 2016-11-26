import DS from 'ember-data';

export default DS.Model.extend({
	email: DS.attr(),
	phone: DS.attr(),
	identification: DS.attr(),
	username: DS.attr(),
	name: DS.attr(),
	role: DS.attr(),
	password: DS.attr(),
	passwordConfirmation: DS.attr()
});

/**
{
	 "email": "jlditru@gmail.com",
	 "phone": "3103323818",
	 "identification": "1017228117",
	 "token": null,
	 "balance": 0,
	 "username": "joluditru",
	 "role": 1,
	 "name": "Jorge Diaz",
	 "password": "joluditru1234",
	 "id_user": 10
 },*/
