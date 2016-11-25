import Ember from 'ember';
const TAG = "[Helper get-value-by-int]: ";

/**role user
0 : cliente
1 : administrador


state reservation
0 : reservada
1 : cancelada
2 : incumplida
3 : completada


type order
0 : delivery
1 : reservation


type payment
0 : no pagada
1 : pagada
*/
export function getValueByInt(params/*,hash*/) {
  let model = params[0];
  let digit = params[1];
  console.log(TAG+"ejecutando helper...");
  console.log(TAG+"parametro model="+model);
  console.log(TAG+"parametro digit="+digit);
  switch (model) {
    case 'user':
    switch (digit) {
      case 0:
      return 'cliente';
      break;
      case 1:
      return 'administrador'
      break;
    }
    break;
    case 'reservation':
    switch (digit) {
      case 0:
      return 'reservada';
      break;
      case 1:
      return 'cancelada'
      break;
      case 2:
      return 'incumplida';
      break;
      case 3:
      return 'completada'
      break;
    }
    break;
    case 'order':
    switch (digit) {
      case 0:
      return 'delivery';
      break;
      case 1:
      return 'reservation'
      break;
    }
    break;
    case 'payment':
    switch (digit) {
      case 0:
      return 'Pagada';
      break;
      case 1:
      return 'No Pagada'
      break;
    }
    break;
  }
}

export default Ember.Helper.helper(getValueByInt);
