controllers.controller('CategoryDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  '$firebaseArray',
  '$modal',
  function($scope, $routeParams, $location, $firebaseArray, $modal) {

  var categoriesRef = new Firebase(fbPath + '/categories');

  $scope.categories = $firebaseArray(categoriesRef);

  $scope.categories.$loaded()
    .then(function() {
      if ($routeParams.id) {
        $scope.category = $scope.categories.$getRecord($routeParams.id);
        $scope.title = "Editing Category: " + $scope.category.name;
        $scope.submitText = "Save Category";
        $scope.showDelete = true;
      } else {
        $scope.title = "New Category";
        $scope.submitText = "Create Category";
        $scope.showDelete = false;
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
        $scope.$root.$broadcast('form.message', {
          type: 'success',
          msg: 'Category Saved!'
        });
      } else {
        $scope.categories.$add($scope.category)
          .then(function(data) {
            $location.path('/category/id/' + data.key());
          });
      }
    } else {
      $scope.$root.$broadcast('form.message', {
        type: 'danger',
        msg: 'Submit Error: Check that you\'ve filled all fields correctly'
      });
    }
  }

  $scope.deleteCategory = function() {
    var modalInstance = $modal.open({
      templateUrl: 'includes/confirmation/index.html',
      controller: 'ConfirmationModalCtrl',
      resolve: {
        msg: function() {
          return 'Are you sure you want to delete the category: "' + $scope.category.name + '"?'
        }
      }
    });

    modalInstance.result.then(function() {
      $scope.categories.$remove($scope.category)
        .then(function() {
          $location.path('/dashboard');
        }, function() {
          $scope.$root.$broadcast('form.message', {
            type: 'danger',
            msg: 'Error: Could not delete this category'
          });
        });
    });
  }

}]);