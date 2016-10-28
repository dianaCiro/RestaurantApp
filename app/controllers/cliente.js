import Ember from 'ember';

/*export default Ember.Controller.extend({
	actions: {
    new: function() {
      console.log('creating new cliente...');

      var model = this.get('model');

      var clientee = this.store.createRecord('cliente', {
        username: model.get('username'),
        nameClient: model.get('nameClient'),
        lastname: model.get('lastname'),
        idClient: model.get('idClient'),
        email: model.get('email'),
        password: model.get('password'),
        phone: model.get('phone'),
      });
      console.log("Cliente"+clientee);
      /*clientee.save().then(function(data) {
        // Clear the form.
        $(':input').val('');
      });
    },
  }
});*/

	var clienteController = Ember.Controller.extend({
    newCliente: null,
    name:null,
    cliente:null,
    actions: {
        acceptChanges: function () {
            var name=this.get('name');
            alert("Mi nombre es"+name);

           /* this.get('newCliente').save().then((cliente) => {
                this.transitionToRoute('cliente');
            });*/
        },
      new: function() {
      console.log('creating new cliente...');

      var model = this.get('model');

      var cliente ={
        username: this.get('username'),
        nameClient: this.get('nameClient'),
        lastname: this.get('lastname'),
        idClient: this.get('idClient'),
        email: this.get('email'),
        password: this.get('password'),
        phone: this.get('phone'),
      };
      alert("Cliente "+cliente);
      console.log(cliente);
      
    }
    }
});
export default clienteController;