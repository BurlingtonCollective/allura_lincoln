controllers.controller('ProjectDetailCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  '$firebaseArray',
  function($scope, $routeParams, $location, $firebaseArray) {

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
        $scope.submitText = "Save";
      } else {
        $scope.title = "New Project";
        $scope.submitText = "Create";
        $scope.project = {};
        $scope.project.images = [];
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
      } else {
        $scope.projects.$add($scope.project)
          .then(function(data) {
            $location.path('/project/id/' + data.key());
          });
      }
    }
  }

}]);