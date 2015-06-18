controllers.controller('LogoutCtrl', ['$scope', '$location', 'currentAuth', 'Auth', function($scope, $location, currentAuth, Auth) {

  if (currentAuth == null) {
    $location.path('/');
  } else {
    Auth.$unauth();
  }

  Auth.$onAuth(function() {
    $location.path('/');
  });

}]);