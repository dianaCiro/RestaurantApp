import DS from 'ember-data';
//import DS from 'ember-data';

 var clienteSerializer = DS.JSONSerializer.extend({
  primaryKey: 'username'
});
export default clienteSerializer;