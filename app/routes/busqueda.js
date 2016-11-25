import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var parameter = 'Pastora Gourmet';
    return new Ember.RSVP.Promise(resolve => {
      this.store.findAll('restaurant').then(services => {
        resolve(services.filterBy('name_restaurant',parameter));
      });
    });
  }
});
