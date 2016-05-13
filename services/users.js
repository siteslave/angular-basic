// User service
angular.module('app.services.Users', [])

  .factory('Users', function ($http) {
    return {
      // The users
      users: [
        { id: '1', name: 'Satit Rianpit' },
        { id: '2', name: 'Steve Jobe' }
      ],
      // Get all users
      all: function () {
        return $http.get('http://jsonplaceholder.typicode.com/users')
          .then(function (res) {
            return res.data;
          });
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