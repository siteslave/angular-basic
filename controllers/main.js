// Main Controller
angular.module('app.controllers.Main', [])
  .controller('MainCtrl', function ($scope, Users) {

    $scope.users = Users.all();

    $scope.add = function () {
      Users.add($scope.newName);
      $scope.newName = null;
    };

    $scope.edit = function (index) {
      var user = $scope.users[index];
      var newName = prompt('Enter new name', user.name);
      if (newName) {
        Users.edit(index, newName);
      }
    };

    $scope.remove = function (index) {
      if (confirm('Are you sure?')) {
        Users.remove(index);
      };
    };

  });