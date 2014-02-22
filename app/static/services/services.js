var chartService = angular.module('chartService', ['ngResource']);
 
chartService.factory('Chart', ['$resource',
  function($resource){
    return $resource('api/chart/:chartId', {}, {isArray:false});
  }]);