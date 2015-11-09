import Ember from 'ember';
import { capitalize } from '../../../helpers/capitalize';

export default Ember.Controller.extend({
  songCreationStarted: false,
  queryParams: {
    sortBy:   'sort',
    searchTerm: 's',
  },
  sortBy:              'ratingDesc',
  searchTerm:          '',

  sortProperties: Ember.computed('sortBy', function() {
    var options = {
      "ratingDesc": "rating:desc,title:asc",
      "ratingAsc":  "rating:asc,title:asc",
      "titleDesc":  "title:desc",
      "titleAsc":   "title:asc",
    };
    return options[this.get('sortBy')].split(',');
  }),

  matchingSongs: Ember.computed('model.songs.@each.title',
  'searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('model.songs').filter(function(song) {
      return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),

  sortedSongs: Ember.computed.sort('matchingSongs', 'sortProperties'),

  canCreateSong: Ember.computed('songCreationStarted', 
    'model.songs.length', function () {

    return this.get('songCreationStarted') || 
    this.get('model.songs.length');
  }),

  isAddButtonDisabled: Ember.computed('title', function() {
      return Ember.isEmpty(this.get('title'));
  }),

  newSongPlaceholder: Ember.computed('model.name', function() {
    var bandName = this.get('model.name');
    return `New ${capitalize(bandName)} song`;
  }),

  actions: {
    updateRating: function(song, rating) {
      if (song.get('rating') === rating) {
        rating = null;
      }  

      song.set('rating', rating);
      song.save();
    },

    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },

  },

});
