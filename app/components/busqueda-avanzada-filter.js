import Ember from 'ember';
const TAG = "[Component busqueda-avanzada-filter.js]: ";

export default Ember.Component.extend({
  classNames: ['busqueda-avanzada-filter'],
  name: '',

  actions:{
    handleFilterAdvanced(){
      console.log(TAG + "handleFilterAdvanced es lanzado");
      let email = this.get('email');
      let description = this.get('description');
      console.log(TAG + "handleFilterAdvanced argumentos tomados: email= " +  email + " desciption: " + description);

      var filterAction = this.get('filter');
      //console.log(TAG + "filterAction obtenido de filter="+JSON.stringify(filterAction));
      var filteredResults = filterAction(email, description);
      //console.log(TAG+"resultados de filter en controlador =" + JSON.stringify(filteredResults));
      this.set('results', filteredResults);
    }
  }
});
