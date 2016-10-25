import DS from 'ember-data';

export default DS.Model.extend({
  _restaurant_id: DS.attr(),
  name: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  score: DS.attr(),
  phone: DS.attr()
});
