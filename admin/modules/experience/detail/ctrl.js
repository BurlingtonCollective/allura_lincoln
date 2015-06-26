controllers.controller('ExperienceDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  '$firebaseArray',
  '$modal',
  function($scope, $routeParams, $location, $firebaseArray, $modal) {

  var experienceRef = new Firebase(fbPath + '/experience');

  $scope.experience = $firebaseArray(experienceRef);

  $scope.experience.$loaded()
    .then(function() {
      if ($routeParams.id) {
        $scope.entry = $scope.experience.$getRecord($routeParams.id);
        $scope.title = "Editing Experience: " + $scope.entry.name;
        $scope.submitText = "Save Experience";
        $scope.showDelete = true;
      } else {
        $scope.title = "New Experience";
        $scope.submitText = "Create Experience Entry";
        $scope.showDelete = false;
      }
    });

  $scope.submit = function() {
    if ($scope.form.$valid) {
      if (typeof($scope.entry.$id) != 'undefined') {
        $scope.experience.$save($scope.entry);
        $scope.$root.$broadcast('form.message', {
          type: 'success',
          msg: 'Experience Saved!'
        });
      } else {
        $scope.experience.$add($scope.entry)
          .then(function(data) {
            $location.path('/experience/id/' + data.key());
          });
      }
    } else {
      $scope.$root.$broadcast('form.message', {
        type: 'danger',
        msg: 'Submit Error: Check that you\'ve filled all fields correctly'
      });
    }
  }

  $scope.deleteEntry = function() {
    var modalInstance = $modal.open({
      templateUrl: 'includes/confirmation/index.html',
      controller: 'ConfirmationModalCtrl',
      resolve: {
        msg: function() {
          return 'Are you sure you want to delete the experience: "' + $scope.entry.name + '"?'
        }
      }
    });

    modalInstance.result.then(function() {
      $scope.experience.$remove($scope.entry)
        .then(function() {
          $location.path('/dashboard');
        }, function() {
          $scope.$root.$broadcast('form.message', {
            type: 'danger',
            msg: 'Error: Could not delete this experience'
          });
        });
    });
  }

}]);