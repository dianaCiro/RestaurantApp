import DS from 'ember-data';
//import DS from 'ember-data';

 var clienteSerializer = DS.JSONSerializer.extend({
  primaryKey: 'id_user'
});
export default clienteSerializer;