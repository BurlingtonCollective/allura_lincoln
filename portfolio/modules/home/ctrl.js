controllers.controller('HomeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var projectsRef = new Firebase(fbPath + '/projects');

  $scope.projects = $firebaseArray(projectsRef);
  $scope.featuredProjects = [];

  $scope.projects.$loaded()
    .then(function() {
      angular.forEach($scope.projects, function(project, index) {
        console.log(project);
        if (project.featured) {
          console.log('here');
          $scope.featuredProjects.push(project);
        }
      });
    });

}]);