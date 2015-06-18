directives.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
  return $firebaseAuth(fb);
}]);