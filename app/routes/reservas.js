import Ember from 'ember';

const soloreservas = [
  {
    "id_reservation": 2,
    "user_restaurant": 2,
    "table_restaurant": 2,
    "date_init": "12/31/2019 02:00:00",
    "date_end": "12/31/2019 04:00:00",
    "amount_people": 4,
    "state": 0
  },{
    "id_reservation": 3,
    "user_restaurant": 2,
    "table_restaurant": 2,
    "date_init": "12/31/2019 04:00:00",
    "date_end": "12/31/2019 06:00:00",
    "amount_people": 4,
    "state": 0
  },{
    "id_reservation": 4,
    "user_restaurant": 2,
    "table_restaurant": 2,
    "date_init": "09/14/2019 01:00:00",
    "date_end": "09/15/2019 02:00:00",
    "amount_people": 4,
    "state": 4
  }
]
const reservations = [
  {
    "reservation": {
      "reservation": {
        "id_reservation": 2,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "12/31/2019 02:00:00",
        "date_end": "12/31/2019 04:00:00",
        "amount_people": 4,
        "state": 0
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  },
  {
    "reservation": {
      "reservation": {
        "id_reservation": 3,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "12/31/2019 04:00:00",
        "date_end": "12/31/2019 06:00:00",
        "amount_people": 4,
        "state": 0
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  },
  {
    "reservation": {
      "reservation": {
        "id_reservation": 4,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "09/14/2019 01:00:00",
        "date_end": "09/15/2019 02:00:00",
        "amount_people": 4,
        "state": 4
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  },
  {
    "reservation": {
      "reservation": {
        "id_reservation": 5,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "09/14/2019 03:00:00",
        "date_end": "09/15/2019 06:00:00",
        "amount_people": 4,
        "state": 4
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  },
  {
    "reservation": {
      "reservation": {
        "id_reservation": 6,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "10/14/2019 03:00:00",
        "date_end": "10/15/2019 06:00:00",
        "amount_people": 4,
        "state": 4
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  },
  {
    "reservation": {
      "reservation": {
        "id_reservation": 7,
        "user_restaurant": 2,
        "table_restaurant": 2,
        "date_init": "11/21/2016 14:42:04",
        "date_end": "11/21/2016 14:42:04",
        "amount_people": 4,
        "state": 4
      },
      "table": {
        "id_table_restaurant": 2,
        "franchise": 2,
        "capacity": 4,
        "available": true
      }
    },
    "franchise": {
      "id_franchise": 2,
      "name_franchise": "Barrientos",
      "restaurant": 3,
      "address": "Barrientos",
      "city": 2,
      "phone": "3333333",
      "latitude": 6.266399,
      "longitude": -75.570281,
      "open_time_week": "06:00",
      "close_time_week": "08:00",
      "open_time_weekend": "08:00",
      "close_time_weekend": "04:00"
    }
  }
];

const TAG = "[Route reservas.js]: ";
console.log(TAG + "entrando a route de reservas");
export default Ember.Route.extend({
    model: function(){
        return this.store.findAll('reservation');
        //console.log(TAG + "modelo a ser retornado a la vista = " + JSON.stringify(soloreservas));
        //return this.store.createRecord('reservation',soloreservas[0]);
    }
});
