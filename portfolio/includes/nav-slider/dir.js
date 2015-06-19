directives.directive('navSlider', ['$firebaseArray', function($firebaseArray) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'portfolio/includes/nav-slider/index.html',
    link: function(scope, element, attrs) {

      var categoriesRef = new Firebase(fbPath + '/categories');

      scope.categories = $firebaseArray(categoriesRef);
      scope.topLevelCategories = [];

      scope.categories.$loaded()
        .then(function() {
          angular.forEach(scope.categories, function(category, index) {
            if (!category.child) {
              scope.topLevelCategories.push(category);
            }
          })
        })

      scope.toggleNavSecondary = function() {
        element.toggleClass('show-secondary');
      }

      scope.$on('$routeChangeStart', function() {
        element.removeClass('show-secondary');
      });
    }
  }
}]);