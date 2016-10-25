import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('busqueda');
  this.route('busqueda_avanzada');
  this.route('cliente');
  this.route('allCliententes');
});

export default Router;
