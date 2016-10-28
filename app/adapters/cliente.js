import DS from 'ember-data';

var clienteAdapter = DS.JSONAPIAdapter.extend({
	host: 'http://haskell-rest.herokuapp.com'
});

export default clienteAdapter;