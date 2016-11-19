import Ember from 'ember';

export default Ember.Component.extend({
	roles:['Administrador','Cliente'],
	rolSelected: 'Cliente',
	vali: false,
	actions: {
	    save(){
	    	$('#form-create div.form-group').removeClass('has-error');
	    	document.getElementById('errors').style.display = 'none';

	    	if(this.get('rolSelected') === 'Administrador'){
	    		this.set('changeset.role',1);
	    	}else{
	    		this.set('changeset.role',2);
	    	}

			if(this.get('changeset', 'isValid')){
				var res = this.attrs.save(this.get('changeset'));
				if(res.tipo === 'Error'){
					document.getElementById('errors').style.display = 'block';
					$('.errors-container').html('Esta identificación ya existe');
					$('#identification').addClass('has-error');
				}
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
