var app = angular.module('portfolio', ['ngRoute', 'firebase', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);
var fbPath = 'https://alluralincoln.firebaseio.com';
var fb = new Firebase(fbPath);

app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
  $rootScope.$on('$routeChangeSuccess', function() {
    $window.ga('send', 'pageview', { page: $location.path() });
  });
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'portfolio/modules/home/index.html',
      controller: 'HomeCtrl'
    })
    .when('/category/:id', {
      templateUrl: 'portfolio/modules/category/index.html',
      controller: 'CategoryCtrl'
    })
    .when('/project/:id', {
      templateUrl: 'portfolio/modules/project/index.html',
      controller: 'ProjectCtrl'
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