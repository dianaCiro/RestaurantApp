import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reservas-filter', 'Integration | Component | reservas filter', {
  integration: true
});
const ITEMS = [
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
]
const FILTERED_ITEMS = [{
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
}];
test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reservas-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reservas-filter}}
      template block text
    {{/reservas-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('should initially load all listings', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  click('#buscar-reservas').then((val1, val2) => {
    if (val1 === '' || val2 === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  // with an integration test, you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
    {{#reservas-filter filter=(action 'filterByDate') as |reservas|}}
        <ul class="results">
            {{#each reservas as |item|}}
              <li class="detail idreserva">{{item.reservation.id_reservation}}</li>
            {{/each}}
        </ul>
    {{/reservas-filter}}
  `);

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.reservation').length, 6);
    assert.equal(this.$('.reservation.reservation.id_reservation').first().text().trim(), '7');
  });
});
