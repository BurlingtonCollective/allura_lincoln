controllers.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function() {
    console.log($scope.contact);
    if($scope.form.$valid) {
      $http({
        url: '//formspree.io/zach@burlingtoncollective.com',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: {
          'name': 'me',
          '_replyto': 'znlincoln@gmail.com',
          'email': 'znlincoln@gmail.com',
          'message': 'yo dawg'
        }
      }).success(function() {
        console.log('success');
      }).error(function(data) {
        console.log('error');
        console.log(data);
      });
    }
    
  }

}]);