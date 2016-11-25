import Ember from 'ember';

const TAG = "[Controller reservas.js]: ";
console.log(TAG + "Entrando a controller de ruta reservas");
export default Ember.Controller.extend({
  actions: {
      filterByDate(ini, fin) {
        console.log(TAG + "filterByDate es ejecutado");
        console.log(TAG + "filterByDate ini="+ini+" fin="+fin);
        if (ini !== '' && fin !== '') {
          var content = this.get('content');
          console.log(TAG+"content del controller="+content);
          return this.get('content').filter((item,index,self)=>item.get('amountPeople') === 4);
        } else {
          return this.get('store').peekAll('reservation');
        }
      }
    }
});
