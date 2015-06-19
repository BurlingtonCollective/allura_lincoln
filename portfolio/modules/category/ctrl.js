controllers.controller('CategoryCtrl', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray) {

  var categoriesRef = new Firebase(fbPath + '/categories'),
      projectsRef = new Firebase(fbPath + '/projects');

  $scope.categories = $firebaseArray(categoriesRef);
  $scope.projects = $firebaseArray(projectsRef);

  $scope.categories.$loaded()
    .then(function() {
      $scope.category = $scope.categories.$getRecord($routeParams.id);

      if ($scope.category.child) {
        $scope.relevantProjects = [];

        angular.forEach($scope.projects, function(project, index) {
          if (project.category == $scope.category.$id) {
            $scope.relevantProjects.push(project);
          }
        });
      } else {
        $scope.childCategories = [];

        angular.forEach($scope.categories, function(category, index) {
          if (category.child && category.parent == $scope.category.$id) {
            $scope.childCategories.push(category);
          }
        })
      }
    });

}]);