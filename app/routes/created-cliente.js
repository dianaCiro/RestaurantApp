import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (sessionStorage.creation == undefined) {
      this.transitionTo('cliente');
    }else{
    	sessionStorage.removeItem("creation");
    }
  },

  actions:{
  	redirect:function(){
  		window.location.replace("https://restaurante-a-la-mano.herokuapp.com");
  	}
  }

});
