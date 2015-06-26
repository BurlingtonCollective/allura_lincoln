controllers.controller('DashboardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects'),
      categoriesRef = new Firebase(fbPath + '/categories'),
      experienceRef = new Firebase(fbPath + '/experience');

  $scope.projects = $firebaseArray(projectsRef);
  $scope.categories = $firebaseArray(categoriesRef);
  $scope.experience = $firebaseArray(experienceRef);

}]);