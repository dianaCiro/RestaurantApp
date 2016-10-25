import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    new: function() {
      console.log('creating new cliente...');

      var model = this.get('model');

      var clientee = this.get('store').createRecord('cliente', {
        username: model.get('username'),
        nameClient: model.get('nameClient'),
        lastname: model.get('lastname'),
        idClient: model.get('idClient'),
        email: model.get('email'),
        password: model.get('password'),
        phone: model.get('phone'),
      });
      clientee.save().then(function(data) {
        // Clear the form.
        $(':input').val('');
      });
    },
  }
});

	