import DS from 'ember-data';

export default DS.Model.extend({
      //id_reservation: DS.attr(),
      userRestaurant: DS.attr(),
      tableRestaurant: DS.attr(),
      dateInit: DS.attr(),
      dateEnd: DS.attr(),
      amountPeople: DS.attr(),
      state: DS.attr(),
      tableCapacity: DS.attr(),
      userName: DS.attr(),
      nameFranchise: DS.attr(),
      paymentState:DS.attr()
      //table: DS.attr('table'),
      //franchise: DS.attr('franchise')
});
