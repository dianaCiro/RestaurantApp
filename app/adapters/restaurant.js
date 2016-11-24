import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //namespace: 'restaurants',
  host: 'https://restaurant-node.herokuapp.com/api'
});
