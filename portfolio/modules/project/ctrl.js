controllers.controller('ProjectCtrl', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects');

  $scope.projects = $firebaseArray(projectsRef);

  $scope.projects.$loaded()
    .then(function() {
      $scope.project = $scope.projects.$getRecord($routeParams.id);
    });

}]);