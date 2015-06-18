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
      controller: 'HomeCtrl'
    })
    .when('/category/:categoryId', {
      templateUrl: 'portfolio/views/category/index.html',
      controller: 'HomeCtrl'
    })
    .when('/project/:projectId', {
      templateUrl: 'portfolio/views/project/index.html',
      controller: 'HomeCtrl'
    })
    .when('/resume', {
      templateUrl: 'portfolio/views/resume/index.html',
      controller: 'HomeCtrl'
    })
    .when('/contact', {
      templateUrl: 'portfolio/views/contact/index.html',
      controller: 'HomeCtrl'
    })
    .when('/error', {
      templateUrl: 'portfolio/views/error/index.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);