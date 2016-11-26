import Ember from 'ember';
const TAG = "[Route busqueda.js]: ";
console.log(TAG + "entrando a route de busqueda");
export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('restaurant');
  }
});
