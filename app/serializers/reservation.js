import DS from 'ember-data';

/** From API:  http://emberjs.com/api/data/classes/DS.Serializer.html
Tipos:
DS.JSONSerializer
{
  id: 1,
  name: 'Sebastian',
  friends: [3, 4]
}
RESTSerializer
{
  person: {   // or "people: []"
    id: 1,
    name: 'Sebastian',
    friends: [3, 4]
  }
}
DS.JSONAPISerializer
{
  "data": {
    "type": "people",
    "id": "123",
    "attributes": {
      "first-name": "Jeff",
      "last-name": "Atwood"
    }
  }
}

{
    "reservation": {
      "id_reservation": 10,
      "user_restaurant": 13,
      "table_restaurant": 10,
      "date_init": "12/01/2016 11:00:00",
      "date_end": "12/01/2016 13:00:00",
      "amount_people": 4,
      "state": 0
    },
    "table": {
      "id_table_restaurant": 10,
      "franchise": 10,
      "capacity": 4,
      "available": true
    },
    "user": {
      "id_user": 13,
      "username": "joanma",
      "name": "joan manuel"
    },
    "franchise": {
      "id_franchise": 10,
      "name_franchise": "Doña Rosa Laureles",
      "restaurant": 10,
      "address": "Cra. 74 #39d-1 a 39d-27",
      "city": 1,
      "phone": "4514545",
      "latitude": 6.2465769,
      "longitude": -75.59389277777777,
      "open_time_week": "08:00",
      "close_time_week": "20:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "22:00"
    },
    "payment": {
      "id_payment": 1,
      "reservation": 10,
      "state": 1
    }
  }
*/
const TAG = "[Serializer reservation]: ";
export default DS.JSONAPISerializer.extend({
  //primaryKey: 'id_reservation',

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log(TAG + "primaryKey configurada=" + primaryKey);
    console.log(TAG + "empieza normalizacion");
    console.log(TAG + "arg store" + store);
    console.log(TAG + "arg primaryModelClass" + JSON.stringify(primaryModelClass));
    console.log(TAG + "arg id" + id);
    console.log(TAG + "arg requestType" + requestType);
    console.log(TAG + "payload inicial = " + JSON.stringify(payload));

    //console.log(TAG + "payload id_reservation= " + JSON.stringify(payload[0].reservation.reservation.id_reservation));
    var auxPayload = {"data":[]};

    if(Em.isArray(payload)){
        console.log(TAG + "payload es array .. length = " + payload.length);
        payload.forEach((reserva)=>{
          console.log(TAG + "reserva obtenida = " + JSON.stringify(reserva));
          var aux ={};
          aux["id"]=reserva.reservation.id_reservation;
          aux["type"]='reservation';
          aux["attributes"]={
            "user-restaurant":reserva.reservation.user_restaurant,
            "table-restaurant":reserva.reservation.table_restaurant,
            "date-init":reserva.reservation.date_init,
            "date-end":reserva.reservation.date_end,
            "amount-people":reserva.reservation.amount_people,
            "state":reserva.reservation.state
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
