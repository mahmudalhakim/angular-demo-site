'use strict';

var dataFactory = angular.module('demoSite.databaseService', []);
dataFactory.factory('Data', function ($http) {

    return {
        getData: function (queryString) {
            return $http.get(queryString);
        }
    };
});