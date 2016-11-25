import Inflector from 'ember-inflector';

/**From API: provides a mechanism for supplying inflection rules for your application.
http://emberjs.com/api/data/classes/Ember.Inflector.html#content
disableCache;
enableCache
inflect
irregular
plural
pluralize
purgedCache
singular
singularize
uncountable

*/

const inflector = Inflector.inflector;

console.log("[model custom-inflector-rules]: inflector es inicializado");
inflector.irregular('reservation', 'reservations/paid/inRange/12-31-1000 02:00:00/12-31-5000 04:00:00');

//inflector.uncountable('advice');

// Meet Ember Inspector's expectation of an export
export default {};
