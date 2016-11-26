import DS from 'ember-data';
//import DS from 'ember-data';
const TAG = "[Serializer reservation]: ";
export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    console.log(TAG + "empieza normalizacion ");
    console.log(TAG + "arg store " + store);
    console.log(TAG + "arg primaryModelClass " + JSON.stringify(primaryModelClass));
    console.log(TAG + "arg id " + id);
    console.log(TAG + "arg requestType " + requestType);
    console.log(TAG + "payload inicial = " + JSON.stringify(payload));

    var auxPayload = {"data":[]};

    if(Em.isArray(payload)){
        console.log(TAG + "payload es array ... length = " + payload.length);
        payload.forEach((rests)=>{
          console.log(TAG + "reserva obtenida = " + JSON.stringify(rests));
          var aux = {};
          aux["id"]=rests.id_restaurant;
          aux["type"]='restaurant';
          aux["attributes"]={
            "name-restaurant":rests.name_restaurant,
            "description":rests.description,
            "email":rests.email
          }
          console.log("[Serializer reservation]:aux normalizado = " + JSON.stringify(aux));
          auxPayload.data.push(aux);
      })
    }
    console.log(TAG + "auxpayload normalizado = " + JSON.stringify(auxPayload));
    payload = auxPayload;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
