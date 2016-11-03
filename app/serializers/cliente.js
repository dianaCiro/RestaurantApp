import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	serialize(snapshot, options) {
	    var json = this._super(...arguments);

	    console.log(json);

    	return json;
  	}
});

/*var clienteSerializer = DS.JSONSerializer.extend({
  primaryKey: 'id_user'
});
export default clienteSerializer;*/