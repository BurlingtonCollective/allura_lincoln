var app = angular.module('portfolio', ['ngRoute', 'firebase', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);
var fb = new Firebase('https://alluralincoln.firebaseio.com');

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function() {
    console.log('dont forget analytics');
  });
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'portfolio/views/home/index.html',
      controller: 'MainCtrl'
    })
    .when('/category/:categoryId', {
      templateUrl: 'portfolio/views/category/index.html',
      controller: 'MainCtrl'
    })
    .when('/project/:projectId', {
      templateUrl: 'portfolio/views/project/index.html',
      controller: 'MainCtrl'
    })
    .when('/resume', {
      templateUrl: 'portfolio/views/resume/index.html',
      controller: 'MainCtrl'
    })
    .when('/contact', {
      templateUrl: 'portfolio/views/contact/index.html',
      controller: 'MainCtrl'
    })
    .when('/error', {
      templateUrl: 'portfolio/views/error/index.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);