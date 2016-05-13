// Basic application
angular.module('app', [])
  .controller('MainCtrl', function ($scope, $log) {

    $scope.users = [
      { id: '1', name: 'Satit Rianpit' },
      { id: '2', name: 'Steve Jobe'}
    ];

    $scope.add = function () {
      var obj = {};
      obj.id = Date.now();
      obj.name = !$scope.newName ? 'Default name' : $scope.newName;
      $scope.users.push(obj);
      // clear text
      $scope.newName = null;
    };

    $scope.edit = function (index) {
      var user = $scope.users[index];
      var newName = prompt('Enter new name', user.name);
      if (newName) {
        $scope.users[index].name = newName;
      }
    };

    $scope.remove = function (index) {
      if (confirm('Are you sure?')) {
        $scope.users.splice(index, 1);
      };
    };

  });