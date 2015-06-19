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
      templateUrl: 'portfolio/modules/home/index.html',
      controller: 'HomeCtrl'
    })
    .when('/category/:categoryId', {
      templateUrl: 'portfolio/modules/category/index.html',
      controller: 'HomeCtrl'
    })
    .when('/project/:projectId', {
      templateUrl: 'portfolio/modules/project/index.html',
      controller: 'HomeCtrl'
    })
    .when('/resume', {
      templateUrl: 'portfolio/modules/resume/index.html',
      controller: 'HomeCtrl'
    })
    .when('/contact', {
      templateUrl: 'portfolio/modules/contact/index.html',
      controller: 'ContactCtrl'
    })
    .when('/error', {
      templateUrl: 'portfolio/modules/error/index.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);