import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	serialize(snapshot, options) {
	    var json = this._super(...arguments);

	    var data = {
	    	"username": json.username,
	    	"name": json.name,
	    	"identification": json.identification,
	    	"email": json.email,
	    	"role": json.role,
	    	"phone": json.phone,
	    	"password": json.password
	    };
	    console.log(data);

    	return data;
  	}
});
