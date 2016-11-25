import Ember from 'ember';
import sessionValidations from '../validations/init-session';

export default Ember.Controller.extend({
	sessionValidations,
	actions: {
	    save(changeset){
	    	
	    },
    	rollback(changeset){
      		changeset.rollback();
    	}
  	}
});
