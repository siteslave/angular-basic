// Basic application
angular.module('app', [])
  .controller('MainCtrl', function ($scope, $log) {

    $log.info('Welcome to angular application.');
    $scope.message = 'Hello world';

  });