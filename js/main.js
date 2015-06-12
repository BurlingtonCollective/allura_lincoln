var app = angular.module('portfolio', ['ngRoute', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function() {
    console.log('dont forget analytics');
  });
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'portfolio/home/index.html',
      controller: 'HomeCtrl'
    })
    .when('/category/:categoryId', {
      templateUrl: 'portfolio/category/index.html',
      controller: 'CategoryCtrl'
    })
    .when('/project/:projectId', {
      templateUrl: 'portfolio/project/index.html',
      controller: 'ProjectDetailCtrl'
    })
    .when('/resume', {
      templateUrl: 'portfolio/resume/index.html',
      controller: 'ResumeCtrl'
    })
    .when('/contact', {
      templateUrl: 'portfolio/contact/index.html',
      controller: 'ContactCtrl'
    })
    .when('/error', {
      templateUrl: 'portfolio/error/index.html',
      controller: 'ErrorCtrl'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);