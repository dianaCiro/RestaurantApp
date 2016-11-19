import Ember from 'ember';
import validations from '../validations/franchiseValids';

export default Ember.Controller.extend({
  validations,
  actions: {
    save(changeset){
      changeset.save();
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
