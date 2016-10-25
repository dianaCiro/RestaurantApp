import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  serialize(snapshot, options) {
    var json = this._super(...arguments);

    json.data.attributes.cost = {
     username: json.data.attributes.username,
      nameClient: json.data.attributes.nameClient,
      lastname: json.data.attributes.lastname,
      idClient: json.data.attributes.idClient,
      email: json.data.attributes.email,
      password: json.data.attributes.password,
      phone: json.data.attributes.phone
    };



    return json;
  },
});
