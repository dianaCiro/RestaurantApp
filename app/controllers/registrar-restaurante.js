import Ember from 'ember';

export default Ember.Controller.extend({
  //Este controlador recibe el modelo del router registrar-restaurante
  actions: {
    registrar(){
      let restaurant = {
        name: this.get('name'),
        address: this.get('address'),
        phone: this.get('phone'),
        description: this.get('description'),
        timetable: this.get('timetable'),
        email: this.get('email'),
        specialty: this.get('specialty'),
        images: this.get('images')
      };
      console.log(restaurant);
      let restaurantModel = this.get('store').createRecord('restaurant',restaurant);
      console.log("from store= " + restaurantModel);
    }
  }
});
