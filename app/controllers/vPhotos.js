'use strict';

angular.module('myApp')
  .controller('vPhotosCtrl', function($scope, $timeout, $q, $log, Flickr) {
  
   $scope.photos = Flickr.load({ tags: 'airplane' });
    
    
});