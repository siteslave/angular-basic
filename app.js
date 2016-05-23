// Basic application
angular.module('app', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: './templates/main.html',
        controller: function ($scope, $state) {
          $scope.products = ['Apple', 'Mongo', 'Orange'];

          $scope.go = function () {
            $state.go('detail', { idx: 1 });
          };
        }
      })
      .state('detail', {
        url: '/detail/:idx',
        templateUrl: './templates/detail.html',
        controller: 'DetailCtrl'
      });


    $urlRouterProvider.otherwise('/');

  })

  .controller('DetailCtrl', function ($scope, $stateParams) {

    console.log($stateParams);

    $scope.users = [
      { id: 1, name: 'Satit' }, // 0
      { id: 2, name: 'John Doe' } // 1
    ];

    $scope.selectedUser = $scope.users[$stateParams.idx];


  });