import Ember from 'ember';
import validations from '../validations/restaurantValids';

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
