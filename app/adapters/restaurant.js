import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //namespace: 'restaurants',
  host: 'http://restaurants-udea-soft.herokuapp.com'
});
