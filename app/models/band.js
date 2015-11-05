import DS from 'ember-data';

export default Ember.Object.extend({
  name:        DS.attr('string'),
  description: DS.attr(),
  songs:       DS.hasMany('song'),

  // setupSongs: Ember.on('init', function() {
  //   if (!this.get('songs')) {
  //     this.set('songs', []);
  //   }
  // }),
});