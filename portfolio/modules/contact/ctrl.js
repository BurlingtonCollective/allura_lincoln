controllers.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function() {

    if($scope.form.$valid) {
      $http.post('//formspree.io/zach+test@burlingtoncollective.com', {
        name: $scope.contact.name,
        email: $scope.contact.email,
        message: $scope.contact.message
      }).success(function() {
        console.log('success');
      }).error(function(data) {
        console.log('error');
        console.log(data);
      });
    }
  }

}]);