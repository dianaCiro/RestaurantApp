import DS from 'ember-data';
//import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serialize(snapshot, options) {
	    var json = this._super(...arguments);

	    console.log("restaurant: " + json.admin);

    	return json;
  	}
});
