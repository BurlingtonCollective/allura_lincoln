controllers.controller('DashboardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects');

  $scope.projects = $firebaseArray(projectsRef);

}]);