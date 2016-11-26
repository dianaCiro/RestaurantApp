import Ember from 'ember';
const TAG = "[Route busqueda-avanzada.js]: ";
console.log(TAG + "entrando a route de busqueda avanzada");
export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('restaurant');
  }
});
