import Ember from 'ember';

var clienteRoute = Ember.Route.extend({
	model: function(){
   return this.store.createRecord('cliente');
  },

    setupController: function(controller, model) {
        controller.set('newCliente', model);
    },
});

export default clienteRoute;