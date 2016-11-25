import Ember from 'ember';

const TAG = "[Component reservas-filter.js]: ";
console.log(TAG + "Entrando a componente de reservas-filter");
export default Ember.Component.extend({



  classNames: ['reservas-filter'],
  fechaStart: '',
  fechaEnd: '',

  /**init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) => this.set('results', allResults));
  },*/

  actions: {
    handleFilterDate() {
      console.log(TAG + "handleFilterDate es lanzado");
      let filterInputValue1 = this.get('fechaStart');
      let filterInputValue2 = this.get('fechaEnd');
      console.log(TAG + "handleFilterDate argumentos tomados: filterInputValue1= "+filterInputValue1+
                              "filterInputValue2= "+filterInputValue2);

      var filterAction = this.get('filter');
      console.log(TAG + "filterAction obtenido de filter="+JSON.stringify(filterAction));
      var filteredResults = filterAction(filterInputValue1, filterInputValue2);
      console.log(TAG+"resultados de filterByDate en controlador =" + JSON.stringify(filteredResults));
    
      this.set('results',filteredResults);
    }
  }
});
