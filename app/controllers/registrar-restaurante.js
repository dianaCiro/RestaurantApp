import Ember from 'ember';

export default Ember.Controller.extend({
  //Este controlador recibe el modelo del router registrar-restaurante
  actions: {
    registrar(){
      let restaurant = {
        id_restaurant: this.get('id_restaurant'),
        name_restaurant: this.get('name_restaurant'),
        description: this.get('description'),
        email: this.get('email'),
        admin: this.get('admin')
      };
      console.log(restaurant);
      let restaurantModel = this.get('store').createRecord('restaurant',restaurant);
      console.log("from store= " + restaurantModel);
    }
  }
});
