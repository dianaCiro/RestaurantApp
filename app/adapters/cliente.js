import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://haskell-rest.herokuapp.com',
	headers: {
		'Content-Type': 'text/plain'
  }
});
