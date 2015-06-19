controllers.controller('ProjectDetailCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects');

  $scope.projects = $firebaseArray(projectsRef);

  $scope.title = "New Project";
  $scope.submitText = "Create";


  $scope.submit = function() {
    if($scope.form.$valid) {
      $scope.projects.$add($scope.project);
    }
  }

}]);