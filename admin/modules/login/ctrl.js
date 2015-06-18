controllers.controller('LoginCtrl', ['$scope', '$location', 'currentAuth', 'Auth', function($scope, $location, currentAuth, Auth) {
  
  if (currentAuth != null) {
    $location.path('/dashboard');
  }

  $scope.login = function() {
    if($scope.form.$valid) {
      Auth.$authWithPassword({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(authData) {
        $location.path('/dashboard');
      }).catch(function(error) {
        console.error('Authentication failed: ' + error);
      });
    }
  }

}]);