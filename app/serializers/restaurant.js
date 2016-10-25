import DS from 'ember-data';
//import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'name'
});
