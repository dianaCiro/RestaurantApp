import Ember from 'ember';
//import ColumnDefinition from 'ember-table/models/column-definition';
//import {randomNumber, randomDate} from '../utils/random';

const TAG= "[Controller all-cliententes]: ";
console.log(TAG+"Entrando a controller...");
export default Ember.Controller.extend({


});


/**
tableColumns: function() {
  var idColumn = ColumnDefinition.create({
    savedWidth: 50,
    textAlign: 'text-align-center',
    headerCellName: 'Id',
    getCellContent: function(row) {
      return row.get('id');
    }
  });
  var phoneColumn = ColumnDefinition.create({
    savedWidth: 100,
    textAlign: 'text-align-left',
    headerCellName:'Telefono',
    getCellContent: function(row) {
      return row.get('phone');
    }
  });
  var nameColumn = ColumnDefinition.create({
    savedWidth: 100,
    textAlign: 'text-align-left',
    headerCellName:'Nombre',
    getCellContent: function(row) {
      return row.get('name');
    }
  });
  var roleColumn = ColumnDefinition.create({
    savedWidth: 100,
    textAlign: 'text-align-left',
    headerCellName:'Rol',
    getCellContent: function(row) {
      let rol = row.get('role');
      if(rol===0){
        return "Cliente";
      }else{
        return "Administrador";
      }
    }
  });
  console.log(TAG+"a retornar idColumn="+JSON.stringify(idColumn));
  console.log(TAG+"a retornar phoneColumn="+JSON.stringify(phoneColumn));
  console.log(TAG+"a retornar nameColumn="+JSON.stringify(nameColumn));
  console.log(TAG+"a retornar roleColumn="+JSON.stringify(roleColumn));

  return [idColumn, phoneColumn, nameColumn, roleColumn];
}.property(),

tableContent:function(){
  console.log(TAG+"Accediendo a tableContent...");
  var tableContent = [];
  var content = this.get('content');
  console.log(TAG+"content del controlador="+content);
  content.forEach(function(item) {
      console.log(TAG+"Iterando... item = "+JSON.stringify(item));
      tableContent.pushObject({
        id: item.get('id'),
        phone: item.get('phone'),
        name: item.get('name'),
        role: item.get('role'),
      });
  });
  return tableContent;
}.property()
*/
