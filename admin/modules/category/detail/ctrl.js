controllers.controller('CategoryDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  '$firebaseArray',
  function($scope, $routeParams, $location, $firebaseArray) {

  var categoriesRef = new Firebase(fbPath + '/categories');

  $scope.categories = $firebaseArray(categoriesRef);

  $scope.categories.$loaded()
    .then(function() {
      if ($routeParams.id) {
        $scope.category = $scope.categories.$getRecord($routeParams.id);
        $scope.title = "Editing Category: " + $scope.category.name;
        $scope.submitText = "Save";
      } else {
        $scope.title = "New Category";
        $scope.submitText = "Create";
      }

      $scope.parentOptions = [];

      angular.forEach($scope.categories, function(category, key) {
        if (category.child || typeof($scope.category) == 'undefined' || category.$id !== $scope.category.$id) {
          $scope.parentOptions.push(category);  
        }
      });
    });

  $scope.submit = function() {
    if ($scope.form.$valid) {
      if (typeof($scope.category.parent) == 'string' && $scope.category.parent.length < 1) {
        $scope.category.child = false;
      }

      if (!$scope.category.child) {
        $scope.category.parent = null;
      }

      if (typeof($scope.category.$id) != 'undefined') {
        $scope.categories.$save($scope.category);
      } else {
        $scope.categories.$add($scope.category)
          .then(function(data) {
            $location.path('/category/id/' + data.key());
          });
      }
    }
  }

}]);