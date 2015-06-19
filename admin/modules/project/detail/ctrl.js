controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects');

  $scope.projects = $firebaseArray(projectsRef);

  $scope.projects.$loaded()
    .then(function() {
      console.log($routeParams.id);
      if ($routeParams.id) {
        $scope.project = $scope.projects.$getRecord($routeParams.id);
        $scope.title = "Editing Project: " + $scope.project.name;
        $scope.submitText = "Save";
      } else {
        $scope.title = "New Project";
        $scope.submitText = "Create";
      }
    });

  $scope.submit = function() {
    if ($scope.form.$valid) {
      $scope.projects.$add($scope.project);
    }
  }

}]);