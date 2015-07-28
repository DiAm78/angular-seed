'use strict';

angular.module('myApp')
  .controller('View3Ctrl', function($scope, $timeout, $q, $log, Flickr) {
    
    $scope.listView3 = [
      {
        order: '1',
        name: 'Grid List'
      },
      {
        order: '2',
        name: 'List'
      },
      {
        order: '3',
        name: 'Menu'
      },
      {
        order: '4',
        name: 'Subheader'
      },
      {
        order: '5',
        name: 'Toast'
      },
      {
        order: '6',
        name: 'Content'
      }
      
      ];
    

});
