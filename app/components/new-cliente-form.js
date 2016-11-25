import Ember from 'ember';
import CryptoJS from 'cryptojs';

export default Ember.Component.extend({
	roles:['Administrador','Cliente'],
	rolSelected: 'Cliente',
	vali: false,
	actions: {
	    save(){
	    	$('#form-create div.form-group').removeClass('has-error');
	    	document.getElementById('errors').style.display = 'none';

	    	if(this.get('rolSelected') === 'Administrador'){
	    		this.get('changeset').set('role', 1);
	    	}else{
	    		this.get('changeset').set('role', 0);
	    	}

			if(this.get('changeset', 'isValid')){
				this.get('changeset').set('password', CryptoJS.SHA256(this.get('changeset.password')).toString());
				var promise = this.attrs.save(this.get('changeset'));
				promise.then(function(){
					if(promise._result != undefined){
						var errorAttr = promise._result.campos[0];
						document.getElementById('errors').style.display = 'block';
						$('.errors-container').html('Ya existe un usuario con este '+errorAttr);
						$('#'+errorAttr).addClass('has-error');
					}					
				});
			}else{
				console.log('record no valido');
			}
	    },
	    rollback(){
	      	this.attrs.rollback(this.get('changeset'));
	    },
	    setRole(role){
	    	this.set('rolSelected',role);
	    }
	}
});
