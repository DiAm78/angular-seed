'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'myApp.version'
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
    .primaryPalette('purple')
    .accentPalette('orange');
});
