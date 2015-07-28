'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'myApp.version',
  'ng',
  'ngResource'
])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
  
	$urlRouterProvider.otherwise('/view1');
    
  $stateProvider
      
    .state('view1', {
        url: '/view1',
        templateUrl: 'views/view1.html'
    })
    
    
    .state('view2', {
        url: '/view2',
        templateUrl: 'views/view2.html'
    })
    
     .state('view3', {
        url: '/view3',
        templateUrl: 'views/view3.html'
    })
    
    .state('vPhotos', {
        url: '/vPhotos',
        templateUrl: 'views/vPhotos.html'
    });
  
  
  $mdIconProvider
    .defaultIconSet("./assets/svg/avatars.svg", 128)
    .icon("menu"       , "./assets/svg/menu.svg"        , 24)
    .icon("share"      , "./assets/svg/share.svg"       , 24)
    .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
    .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
    .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
    .icon("phone"      , "./assets/svg/phone.svg"       , 512);

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange');
})

.controller('myAppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    };
    
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
});

