import Ember from 'ember';
import ClienteValidations from '../validations/cliente';

export default Ember.Controller.extend({
	ClienteValidations,
	actions: {
    /*new: function() {
      console.log('creating new cliente...');

      this.newCliente.username = this.get('username');
      this.newCliente.nameClient = this.get('nameClient');
      this.newCliente.lastname = this.get('lastname');
      this.newCliente.idClient = this.get('idClient');
      this.newCliente.email = this.get('email');
      this.newCliente.password = this.get('password');
      this.newCliente.phone = this.get('phone');
      this.newCliente.cellphone = this.get('cellphone');

      this.newCliente.save();
    }*/
    save(changeset){
      changeset.save();
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
