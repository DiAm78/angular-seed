'use strict';

angular.module('myApp')
  .controller('View1Ctrl', function($scope) {
    $scope.listView1 = [
      {
        order: '1',
        name: 'Whiteframe'
      },
      {
        order: '2',
        name: 'Whiteframe2'
      },
      {
        order: '3',
        name: 'Bottom Sheet'
      },
      {
        order: '4',
        name: 'FAB Toolbar'
      },
      {
        order: '5',
        name: 'FAB Speed Dial'
      },
      {
        order: '6',
        name: 'Tabs'
      },
      {
        order: '7',
        name: 'Toolbar'
      },
      {
        order: '8',
        name: 'Tooltip'
      }
      
      ];
});