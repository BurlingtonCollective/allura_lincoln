controllers.controller('DashboardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects'),
      categoriesRef = new Firebase(fbPath + '/categories');

  $scope.projects = $firebaseArray(projectsRef);
  $scope.categories = $firebaseArray(categoriesRef);

}]);