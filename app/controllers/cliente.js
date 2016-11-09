import Ember from 'ember';
import ClienteValidations from '../validations/cliente';

export default Ember.Controller.extend({
	ClienteValidations,
	actions: {
    save(changeset){
      changeset.save();
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
