import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //namespace: 'restaurants',
  host: 'https://restaurants-udea-soft.herokuapp.com'

});
