'use strict';

angular.module('demoSite.season', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/season', {
            templateUrl: 'template/season.html',
            controller: 'SeasonController'
        });
    }])

    .controller('SeasonController', ['$scope', '$http', '$routeParams', 'Data', 'Season', function ($scope, $http, $routeParams, Data, Season) {

        var serie = Season.getSeries();

        $scope.seasonData = Season.getSeason();

        $scope.seriesData = serie.imdbID;

    }]);