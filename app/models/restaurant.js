import DS from 'ember-data';

export default DS.Model.extend({
  id_restaurant: DS.attr(),
  name_restaurant: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  phone: DS.attr(),
  description: DS.attr(),
  latitud: DS.attr(),
  longitude: DS.attr(),
  open_time_week: DS.attr(),
  close_time_week:DS.attr(),
  open_time_weekend:DS.attr(),
 close_time_weekend:DS.attr(),
  admin: DS.attr(),
  
});
