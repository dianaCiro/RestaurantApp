import Ember from 'ember';
//import ClienteValidations from '../validations/cliente'; 

export default Ember.Component.extend({

	actions: {
	    save(){
	      this.attrs.save(this.get('changeset'));
	    },
	    rollback(){
	      this.attrs.rollback(this.get('changeset'));
	    }
	}
});
