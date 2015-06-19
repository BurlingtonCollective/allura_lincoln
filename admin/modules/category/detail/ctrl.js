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
        if (!("parent" in category) && (typeof($scope.category) == 'undefined' || category.$id !== $scope.category.$id)) {
          $scope.parentOptions.push(category);  
        }
      });
    });

  $scope.submit = function() {
    if($scope.form.$valid) {
      if (typeof($scope.category.$id) != 'undefined') {
        $scope.categories.$save($scope.category);
      } else {
        $scope.categories.$add($scope.category)
          .then(function(data) {
            $location.path('/cateogry/id/' + data.key());
          });
      }
    }
  }

}]);