import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    new: function() {
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
    }
  }
});

/*  newCliente: null,
  name:null,
  cliente:null,
  actions: {
    new: function() {
      console.log('creating new cliente...');

      var cliente ={
        username: this.get('username'),
        nameClient: this.get('nameClient'),
        lastname: this.get('lastname'),
        idClient: this.get('idClient'),
        email: this.get('email'),
        password: this.get('password'),
        phone: this.get('phone'),
        cellphone: this.get('cellphone')
      };
        
      console.log(cliente);
      
      $.ajax({
        type: "POST",
        url: "http://haskell-rest.herokuapp.com/clientes",
        headers: { 'Content-Type': 'application/json'},
        data: cliente
      }).done(function(data) {
        alert("Success");
      }).fail(function(jqXHR, exception){
        var msg = '';
        if (jqXHR.status === 0) {
          msg = 'CORS Error.\n Notify Backend.';
        } else if (jqXHR.status === 404) {
          msg = 'Requested page not found. [404]';
        } else if (jqXHR.status === 500) {
          msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
          msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
          msg = 'Time out error.';
        } else if (exception === 'abort') {
          msg = 'Ajax request aborted.';
        } else {
          msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        alert(msg);
      });

    }
  }
});
export default clienteController;*/
