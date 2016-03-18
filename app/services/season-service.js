'use strict';

var seasonService = angular.module('demoSite.seasonService', []);

seasonService.service('Season', function () {

    var season = '';
    var series = '';

    var setSeason = function (seasonObject) {
        season = seasonObject;
    };

    var getSeason = function () {
        return season;
    };

    var setSeries = function (seriesObject) {
        series = seriesObject;
    };

    var getSeries = function () {
        return series;
    };

    return {
        setSeason: setSeason,
        getSeason: getSeason,
        setSeries: setSeries,
        getSeries: getSeries
    };
});