import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  }, 

  actions: {
    save() {
      var controller = this.get('controller'),
          band = controller.get('model');

      return band.save();
    },

    willTransition() {
      var controller = this.get('controller'), leave;

      if (controller.get('isEditing')){
        leave = window.confirm("You have unsaved changed. Are you sure you want to leave?");
        if(leave) {
          controller.set('isEditing', false);          
        } else {
          transition.abort();
        }
      }
    }
  }
});
