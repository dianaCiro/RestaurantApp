import Ember from 'ember';
const TAG = "[Component busqueda-filter.js]: ";
console.log(TAG + "Entrando a componente de busqueda-filter");
export default Ember.Component.extend({
  classNames: ['busqueda-filter'],
  name: '',

  actions:{
    handleFilterName(){
      console.log(TAG + "handleFilterDate es lanzado");
      document.getElementById('errors').style.display = 'none';
      document.getElementById('root').style.display = 'block';
      let paramName = this.get('name');
      console.log(TAG + "handleFilterDate argumentos tomados: filterInputValue1= " +  paramName);
      console.log("Argumento tomado = " + paramName);

      var filterAction = this.get('filter');
      console.log(TAG + "filterAction obtenido de filter="+JSON.stringify(filterAction));
      var filteredResults = filterAction(paramName);
      if(filteredResults.length==0 && paramName!=""){
        document.getElementById('errors').style.display = 'block';
        document.getElementById('root').style.display = 'none';
        $('.errors-container').html('No existen restaurantes con este nombre');
        $('.form-group').addClass('has-error');
      }
      console.log(TAG+"resultados de filterByDate en controlador =" + filteredResults);
      this.set('results', filteredResults);
    }
  }
});
