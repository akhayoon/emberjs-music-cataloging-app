import DS from 'ember-data';

export default Ember.Object.extend({
  title:  DS.attr(),
  rating: DS.attr('number'),
  band:   DS.belongsTo('band'),
});