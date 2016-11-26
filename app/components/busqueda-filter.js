import Ember from 'ember';
const TAG = "[Component reservas-filter.js]: ";
console.log(TAG + "Entrando a componente de busqueda-filter");
export default Ember.Component.extend({
  classNames: ['busqueda-filter'],
  name: '',

  actions:{
    handleFilterName(){
      console.log(TAG + "handleFilterDate es lanzado");
      let paramName = this.get('name');
      console.log(TAG + "handleFilterDate argumentos tomados: filterInputValue1= " +  paramName);
      console.log("Argumento tomado = " + paramName);

      var filterAction = this.get('filter');
      console.log(TAG + "filterAction obtenido de filter="+JSON.stringify(filterAction));
      var filteredResults = filterAction(paramName);
      console.log(TAG+"resultados de filterByDate en controlador =" + JSON.stringify(filteredResults));
      this.set('results', filteredResults);
    }
  }
});
