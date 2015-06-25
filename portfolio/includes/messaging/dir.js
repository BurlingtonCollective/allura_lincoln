directives.directive('formMessage', [function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'portfolio/includes/messaging/index.html',
    link: function(scope, element, attrs) {
      scope.$on('message.success', function() {
        element.addClass('in');
      });
    }
  }
}]);