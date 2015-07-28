angular.module('myApp')
  .directive('masonryItem', function () {
    return {
        restrict: 'AC',
        link: function (scope, elem, attrs) {
            elem.imagesLoaded(function () {
               elem.parents('.masonry').masonry('reload');
            });
        }
    };        
});
