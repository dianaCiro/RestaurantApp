import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    save(){
			if(this.get('changeset').get('isValid')){
				this.attrs.save(this.get('changeset'));
			}
	    },
	    rollback(){
	      	this.attrs.rollback(this.get('changeset'));
	    }
	}
});
