import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import sessionValidations from '../validations/init-session';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		let init = {
			username: null,
			password: null,
		};
		this.changeset = new Changeset(init, lookupValidator(sessionValidations), sessionValidations);
	},
	actions:{
		save:function(){
			console.log(this.get('changeset.username'));
		},
		rollback:function(){
			this.attrs.rollback(this.get('changeset'));
		}
	}
});
