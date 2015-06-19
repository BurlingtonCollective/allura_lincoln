var app = angular.module('cms', ['ngRoute', 'firebase', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);
var fbPath = 'https://alluralincoln.firebaseio.com';
var fb = new Firebase(fbPath);

app.run(['$rootScope', '$location', function($rootScope, $location) {
  
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if (error === 'AUTH_REQUIRED') {
      $location.path('/');
    } else {
      $location.path('/error');
    }
  });

}]);

app.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'modules/login/index.html',
      controller: 'LoginCtrl',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$waitForAuth();
        }]
      }
    })
    .when('/logout', {
      templateUrl: 'modules/logout/index.html',
      controller: 'LogoutCtrl',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$waitForAuth();
        }]
      }
    })
    .when('/dashboard', {
      templateUrl: 'modules/dashboard/index.html',
      controller: 'DashboardCtrl',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .when('/project/id/:id', {
      templateUrl: 'modules/project/detail/index.html',
      controller: 'ProjectDetailCtrl',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .when('/project/new', {
      templateUrl: 'modules/project/detail/index.html',
      controller: 'ProjectDetailCtrl',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
    .when('/error', {
      templateUrl: 'modules/error/index.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/error'
    });

}]);