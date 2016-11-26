import Ember from 'ember';
const TAG = "[Controller busqueda.js]: ";
console.log(TAG + "Entrando a controller de ruta buscada");


export default Ember.Controller.extend({
  actions: {
   filterByName(param){
     console.log("El filtro se esta ejecutando " +  param);
     if (param != '') {
       var content = this.get('content');
       console.log(TAG+"content del controller="+content);
       //console.log(TAG+"store del controller="+store);
       return this.get('content').filter((item,index,self)=>item.get('name_restaurant') === param);
     }else{
       //console.log(TAG+"store del controller="+store);
       return this.get('store').peekAll('restaurant');
     }
   }
  }
});
