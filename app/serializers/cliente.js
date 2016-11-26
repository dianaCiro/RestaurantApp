import DS from 'ember-data';
const TAG = "[Serializer cliente]: ";
export default DS.JSONSerializer.extend({
	serialize(snapshot, options) {
	    var json = this._super(...arguments);


	    var data = {
	    	"username": json.username,
	    	"name": json.name,
	    	"identification": json.identification,
	    	"email": json.email,
	    	"role": json.role,
	    	"phone": json.phone,
	    	"password": json.password
	    };
	    // console.log(data);

    	return data;
  	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		  console.log(TAG + "normalizeResponse: empieza normalizacion");
		store.payload = payload;

	    return this._super(store, primaryModelClass, payload, id, requestType);
  	},
	normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
		  console.log(TAG + "empieza normalizacion...");
			console.log(TAG + "payload inicial = " + JSON.stringify(payload));

			var auxPayload = [];

			if(Em.isArray(payload)){
				console.log(TAG + "payload es array ... length = " + payload.length);
        payload.forEach((cliente)=>{
          console.log(TAG + "cliente obtenida = " + JSON.stringify(cliente));
          var aux ={};
          aux["id"]=cliente.id_user;
					aux["email"]=cliente.email;
					aux["phone"]=cliente.phone;
					aux["identification"]=cliente.identification;
					aux["username"]=cliente.username;
					aux["name"]=cliente.name;
          aux["role"]=cliente.role;
          aux["password"]=cliente.password;
          console.log(TAG+"aux normalizado = " + JSON.stringify(aux));
          auxPayload.push(aux);
      })
			}
			console.log(TAG + "auxpayload normalizado = " + JSON.stringify(auxPayload));
			payload = auxPayload;
			return this._super(store, primaryModelClass, payload, id, requestType);
	}

});

/*
{
    "email": "25rest@rest25.com",
    "phone": "234122233",
    "identification": "25252525525252",
    "token": null,
    "balance": 0,
    "username": "rest2525",
    "role": 0,
    "name": "rest25",
    "password": "e7f5725812407063178c78bf4f1468f9e661ebd6c1fd41dd933ea1d126cc189e",
    "id_user": 25
  },
	var aux ={};
	aux["id"]=cliente.id_user;
	aux["type"]='cliente';
	aux["attributes"]={
		"email"]=cliente.email,
		"phone"]=cliente.phone,
		"token"]=cliente.token,
		"balance"]=cliente.balance,
		"username"]=cliente.username,
		"role"]=cliente.role,
		"password"]=cliente.password,
		"name"]=cliente.name,
		"identification"]=cliente.identification
	}

	*/
