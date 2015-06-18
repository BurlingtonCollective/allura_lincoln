directives.directive('navSlider', [function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'portfolio/includes/nav-slider/index.html',
    link: function(scope, element, attrs) {
      scope.toggleNavSecondary = function() {
        element.toggleClass('show-secondary');
      }

      scope.$on('$routeChangeStart', function() {
        element.removeClass('show-secondary');
      });
    }
  }
}]);