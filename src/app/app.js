'use strict';

angular.module( 'ozpWebtopApp', [
  'templates-app',
  'templates-common',
  'ui.router',
  'ozpClassification'
])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
  })

//.config( function myAppConfig ( $routeProvider ) {
//  $routeProvider.when('/grid', {
//    templateUrl: 'views/grid.html',
//    controller: 'GridController'
//  }).when('/desktop', {
//    templateUrl: 'views/desktop.html',
//    controller: 'DesktopController'
//  }).otherwise({
//    redirectTo: '/grid'
//  });
//})

.run( function run () {
})
.controller( 'AppCtrl', function AppCtrl ( $scope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | filtrfy' ;
    }
  });
});




