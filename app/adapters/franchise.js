import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://restaurants-udea-soft.herokuapp.com'
});
