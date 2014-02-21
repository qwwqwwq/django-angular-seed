var chartService = angular.module('chartService', ['ngResource']);
 
chartService.factory('Chart', ['$resource',
  function($resource){
    return $resource('charts/:chartId', {}, {});
  }]);