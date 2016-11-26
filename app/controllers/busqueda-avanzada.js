import Ember from 'ember';
const TAG = "[Controller busqueda-avanzada.js]: ";

export default Ember.Controller.extend({
  actions: {
    filterAdvanced(email, description){
      console.log("El filtro avanzado se esta ejecutando ");
      var filtered;
      if (email != '' && email != undefined) {
        var content = this.get('content');
        console.log(TAG+"content del controller="+content+" email: "+email);
        filtered = this.get('content').filter((item,index,self)=>item.get('email') === email);
        if(description != '' && description != undefined){
          console.log(TAG+"description is not empty "+description);
          filtered = filtered.filter((item,index,self)=>item.get('description') === description);
        }
        return filtered;
      }
      else if(description != '' && description != undefined){
        var content = this.get('content');
        console.log(TAG+"content del controller2="+content);
        return this.get('content').filter((item,index,self)=>item.get('description') === description);
      }
      else{
        return this.get('store').peekAll('restaurant');
      }
    }
  }
});
