controllers.controller('ProjectDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  '$firebaseArray',
  '$modal',
  function($scope, $routeParams, $location, $firebaseArray, $modal) {

  var projectsRef = new Firebase(fbPath + '/projects'),
      categoriesRef = new Firebase(fbPath + '/categories');

  $scope.projects = $firebaseArray(projectsRef);
  $scope.categories = $firebaseArray(categoriesRef);

  $scope.projects.$loaded()
    .then(function() {
      console.log($routeParams.id);
      if ($routeParams.id) {
        $scope.project = $scope.projects.$getRecord($routeParams.id);
        $scope.title = "Editing Project: " + $scope.project.name;
        $scope.submitText = "Save Project";
        $scope.showDelete = true;
      } else {
        $scope.title = "New Project";
        $scope.submitText = "Create Project";
        $scope.project = {};
        $scope.project.images = [];
        $scope.showDelete = false;
      }
    });

  $scope.addImage = function() {
    $scope.project.images.push($scope.newImg);
    $scope.newImg = null;
  }

  $scope.deleteImage = function(index) {
    $scope.project.images.splice(index, 1);
  }

  $scope.submit = function() {
    if ($scope.form.$valid) {
      if (typeof($scope.project.$id) != 'undefined') {
        $scope.projects.$save($scope.project);
        $scope.$root.$broadcast('form.message', {
          type: 'success',
          msg: 'Project Saved!'
        });
      } else {
        $scope.projects.$add($scope.project)
          .then(function(data) {
            $location.path('/project/id/' + data.key());
          });
      }
    } else {
      $scope.$root.$broadcast('form.message', {
        type: 'danger',
        msg: 'Submit Error: Check that you\'ve filled all fields correctly'
      });
    }
  }

  $scope.deleteProject = function() {
    var modalInstance = $modal.open({
      templateUrl: 'includes/confirmation/index.html',
      controller: 'ConfirmationModalCtrl',
      resolve: {
        msg: function() {
          return 'Are you sure you want to delete the project: "' + $scope.project.name + '"?'
        }
      }
    });

    modalInstance.result.then(function() {
      $scope.projects.$remove($scope.project)
        .then(function() {
          $location.path('/dashboard');
        }, function() {
          $scope.$root.$broadcast('form.message', {
            type: 'danger',
            msg: 'Error: Could not delete this project'
          });
        });
    });
  }

}]);