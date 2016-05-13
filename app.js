// Basic application
angular.module('app', [])
  .controller('MainCtrl', function ($scope, $log) {

    $scope.name = 'Satit Rianpit';

    $scope.setName = function () {
        $scope.name = !$scope.newName ? 'Steve Job' : $scope.newName;
    };

    $scope.showName = function () {
        alert('Hi, ' + $scope.name);
    };

    $scope.showOtherName = function (name) {
        $scope.name = name;
        $scope.showName();
    };

  });