import Ember from 'ember';

const TAG = "[Controller reservas.js]: ";
console.log(TAG + "Entrando a controller de ruta reservas");

/**
    formato de fecha recibida: "12/01/2016 11:00:00",
*/

function isInRangeOfDates(ini,fin,date) {
  date = date.substr(0,10);
  console.log(TAG+"Se extrae la fecha tomada: "+date);
  ini = ini.split("-");
  fin = fin.split("-");
  date = date.split("/");
  console.log(TAG,"fecha inicial dividida=" + ini);
  console.log(TAG,"fecha final dividida=" + fin);
  console.log(TAG,"fecha argumento dividida=" + date);
  let from = new Date(ini[0],parseInt(ini[1])-1,ini[2]); //formato YYYY,MM,DD
  let to = new Date(fin[0],parseInt(fin[1])-1,fin[2]); //formato YYYY,MM,DD
  let arg = new Date(date[2],parseInt(date[1])-1,date[0]); //formato YYYY,MM,DD
  return (arg >= from && arg <= to);
}

export default Ember.Controller.extend({
  actions: {
      filterByDate(ini, fin) {
        console.log(TAG + "filterByDate es ejecutado");
        console.log(TAG + "filterByDate ini="+ini+" fin="+fin);
        if (ini !== '' && fin !== '') {
          var content = this.get('content');
          console.log(TAG+"content del controller="+content);
          return this.get('content').filter((item,index,self)=>isInRangeOfDates(ini,fin,item.get('dateInit')));
        } else {
          return this.get('store').peekAll('reservation');
        }
      }
    }
});
