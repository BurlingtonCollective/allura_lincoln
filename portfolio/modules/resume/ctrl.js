controllers.controller('ResumeCtrl', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray) {

  var experienceRef = new Firebase(fbPath + '/experience');

  $scope.experience = $firebaseArray(experienceRef);

  // $scope.experience.$loaded()
  //   .then(function() {
  //     $scope.project = $scope.projects.$getRecord($routeParams.id);
  //   });

}]);