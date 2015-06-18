directives.directive('topNav', ['Auth', function(Auth) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'includes/top-nav/index.html',
    link: function(scope, element, attrs) {
      
      Auth.$onAuth(function(authData) {
        if (authData) {
          element.addClass('in');
        } else {
          element.removeClass('in');
        }
      });
      
    }
  }
}]);