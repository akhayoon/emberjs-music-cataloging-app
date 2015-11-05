import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug',params.slug);
  },

  actions: {
    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },
  }
});
