'use strict';

angular.module('demoSite.series', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/series/:imdbID', {
            templateUrl: 'template/series.html',
            controller: 'SeriesController'
        });
    }])

    .controller('SeriesController', ['$scope', '$http', '$routeParams', 'Data', 'Season', function ($scope, $http, $routeParams, Data, Season) {

        var seriesID = $routeParams.imdbID;
        var allDataQuery = 'http://www.omdbapi.com/?i=' + seriesID + '&plot=full&r=json';

        Data.getData(allDataQuery).then(function (response) {
            $scope.allData = response.data;
            Season.setSeries($scope.allData);
        });

        $scope.getSeasonData = function (i) {
            Data.getData('http://www.omdbapi.com/?i=' + seriesID + '&season=' + i + '&plot=long&r=json').then(function (response) {
                $scope.seasonData = response.data;
                Season.setSeason(response.data);
            });
        };

    }]);
