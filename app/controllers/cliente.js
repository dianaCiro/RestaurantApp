import Ember from 'ember';
import ClienteValidations from '../validations/cliente';

export default Ember.Controller.extend({
	ClienteValidations,
	actions: {
    save(changeset){
      //return(changeset.save());
      if(changeset.get('identification') === '147852'){
      	var res = {
      		tag: 'ResultadoConCampos',
      		mensaje: 'Key identification = identificacion ya existe',
      		campos: ['identification'],
      		tipo: 'Error'
      	};
				return res;
      }else{
      	var res =  {
		  tag: "Resultado",
		  mensaje: "Cliente agregado",
		  tipo: "Success"
		};
				sessionStorage.setItem("creation",changeset.get('username'));
				this.transitionToRoute('created-cliente');
      }
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
