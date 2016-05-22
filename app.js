// Basic application
angular.module('app', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: './templates/main.html',
        controller: function ($scope) {
          $scope.message = 'Main page';
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: './templates/about.html',
        controller: function ($scope) {
          $scope.message = 'About Page';
        }
      })
      .state('new', {
        url: '/new',
        templateUrl: './templates/new.html',
        controller: function ($scope) {
          $scope.message = 'New Page';
        }
      });

  })
  .controller('MainCtrl', function ($scope, $log) {

  });