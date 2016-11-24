import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  filterText: '',
  filteredResults: function() {
   var filter = this.get('filter');
     return new Ember.RSVP.Promise(resolve => {
       this.store.findAll('restaurant').then(services => {
         resolve(services.filterBy('name_restaurant',filter));
       });
     });
 }.property('filter'),
 actions:{
   applyFilter(){
     alert("Buscando");
     this.set('filter', this.get('filterText'));
   }
 }

  /*actions:{
    findRecord(params) {
      alert("Buscando");
      return new Ember.RSVP.Promise(resolve => {
        this.store.findAll('restaurant').then(services => {
          resolve(services.filterBy('name_restaurant',params));
        });
      });
    }
  }*/
});
