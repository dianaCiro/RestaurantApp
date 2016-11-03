import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://haskell-rest.herokuapp.com'
}); 

/*var clienteAdapter = DS.JSONAPIAdapter.extend({
	host: 'http://haskell-rest.herokuapp.com'
});

export default clienteAdapter;*/