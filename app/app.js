'use strict';

angular.module('demoSite', [
    'ngRoute',
    'demoSite.search',
    'demoSite.movie',
    'demoSite.series',
    'demoSite.season',
    'demoSite.databaseService',
    'demoSite.seasonService'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/search'});
}]);


