import DS from 'ember-data';

/**From api: http://emberjs.com/api/data/classes/DS.Adapter.html
An adapter is an object that receives
requests from a store and translates them
into the appropriate action to take against your persistence layer
METHODS

createRecord, deleteRecord, findAll, findMany, findRecord
generateIdForRecord, groupRecordsForFindMany, query, queryRecord
serialize, shouldBackgroundReloadAll, shouldBackgroundReloadRecord
shouldReloadAll, shouldReloadRecord, updateRecord
PROPERTIES
coalesceFindRequests, defaultSerializer
*/
console.log("[Adapter reservation]: adaptador de reservation inicializado...");
export default DS.RESTAdapter.extend({
    host: 'https://restaurants-udea-soft.herokuapp.com',
});
