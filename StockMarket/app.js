angular.module('stockApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as main'
    })
    .when('/index/:symbol', {
      templateUrl: 'views/index.html',
      controller: 'IndexController as idx'
    })
    .otherwise({ redirectTo: '/' });
});
