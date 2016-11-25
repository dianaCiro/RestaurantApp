import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  //namespace: 'restaurants',
  host: 'https://restaurant-node.herokuapp.com/api',

  //Implementacion a ser usada cuando se llame createRecord al modelo
  createRecord: function(store, type, snapshot) {
    console.log("(Adapter restaurant createRecord): entra a metodo createRecord");
    console.log("(Adapter restaurant createRecord): store recibido: " + store);
    console.log("(Adapter restaurant createRecord): type recibido: " + JSON.stringify(type));
    console.log("(Adapter restaurant createRecord): snapshot recibido: " + snapshot);
    var data = this.serialize(snapshot, { includeId: false });
    var data1 = this.serialize(snapshot, { includeId: true });

    console.log("(Adapter restaurant createRecord): data recibida del serializer: " + JSON.stringify(data));
    console.log("(Adapter restaurant createRecord): data recibida del serializer con includeId=true: " + JSON.stringify(data1));
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        url: `https://restaurants-udea-soft.herokuapp.com/restaurants`,
        dataType: 'json',
        headers: {
          'Content-Type':'text/json'
        },
        data: data
      }).then(function(data) {
        console.log("(Adapter restaurant createRecord ajax.then): data recibida de ajax en success: " + JSON.stringify(data));
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        console.log("(Adapter restaurant createRecord ajax.then): data recibida de ajax en fail: " + JSON.stringify(jqXHR));
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }

});

/**host: "https://restaurants-udea-soft.herokuapp.com",
headers: {
  'Content-Type': 'application/json'
  //'X-Requested-With': 'XMLHttpRequest'
  },
ajax(url, method, hash) {
  console.log("(adapter restaurant ajax): entrando a metodo ajax");
  if (ENV.APP.usingCors) {
    console.log("(adapter restaurant ajax): app esta usando cors");
    console.log("(adapter restaurant ajax): valores de hash = " + JSON.stringify(hash));
    if (hash === undefined) { hash = {}; }
    hash.crossDomain = true;
    console.log("(adapter restaurant ajax): valores nuevos de hash = " + JSON.stringify(hash));
    console.log("(adapter restaurant ajax): setting hash.crossDomain = " + hash.crossDomain);
    if (ENV.APP.corsWithCreds) {
      console.log("(adapter restaurant ajax): app has cors with credentials");
      console.log("(adapter restaurant ajax): old hash.xhrFields values = " + JSON.stringify(hash.xhrFields));
      hash.xhrFields = { withCredentials: true };
      console.log("(adapter restaurant ajax): new hash.xhrFields values =" + JSON.stringify(hash.xhrFields));
    }
  }
  return this._super(url, method, hash);
}
*/
