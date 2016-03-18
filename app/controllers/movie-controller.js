'use strict';

angular.module('demoSite.movie', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie/:imdbID', {
            templateUrl: 'template/movie.html',
            controller: 'MovieController'
        });
    }])

    .controller('MovieController', ['$scope', '$http', '$routeParams', 'Data', function ($scope, $http, $routeParams, Data) {

        var queryString = 'http://www.omdbapi.com/?i=' + $routeParams.imdbID + '&plot=full&r=json';
        Data.getData(queryString).then(function (response) {
            $scope.allData = response.data;
        });

    }]);
