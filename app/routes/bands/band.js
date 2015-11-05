import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('band', params.id);
  },

  // actions: {
  //   didTransition: function() {
  //     document.title = 'Bands - Rock & Roll';
  //   },
  // }
});
