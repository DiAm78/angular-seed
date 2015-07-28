/**
 * @ngdoc service
 * @name flickr pic example
 * @description
 * # flickr
 * Factory in the angular seed app.
 */
angular.module('myApp')
  .factory('Flickr', function ($resource) {
    return $resource('https://api.flickr.com/services/feeds/photos_public.gne', 
      { format: 'json', jsoncallback: 'JSON_CALLBACK' }, 
      { 'load': { 'method': 'JSONP' }});
  });