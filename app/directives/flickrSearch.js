angular.module('myApp')
  .directive('masonry', function ($parse) {
    return {
        restrict: 'AC',
        link: function (scope, elem, attrs) {
            elem.masonry({ itemSelector: '.masonry-item', columnWidth: $parse(attrs.masonry)(scope) });
        }
    };        
});