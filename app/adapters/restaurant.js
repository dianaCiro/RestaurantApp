import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://restaurant-node.herokuapp.com'
});
