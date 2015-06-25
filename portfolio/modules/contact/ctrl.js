controllers.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function() {

    $scope.$root.$broadcast('message.success');
    $scope.contact = {
      name: '',
      email: '',
      message: ''
    };
    return false;
    
    if($scope.form.$valid) {
      $http.post('//formspree.io/zach@burlingtoncollective.com', {
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