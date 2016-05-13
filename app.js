// Basic application
angular.module('app', [])
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

  })

  .factory('Users', function ($rootScope) {
    return {
      // The users
      users: [
        { id: '1', name: 'Satit Rianpit' },
        { id: '2', name: 'Steve Jobe' }
      ],
      // Get all users
      all: function () {
        return this.users;
      },
      // Add user
      add: function (name) {
        var obj = {};
        obj.id = Date.now();
        obj.name = !name ? 'Default name' : name;
        this.users.push(obj);
        return;
      },
      // Edit user
      edit: function (index, name) {
        this.users[index].name = name;
        return;
      },
      // Remove user
      remove: function (index) {
        this.users.splice(index, 1);
        return;
      }
    }
  });