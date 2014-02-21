(function () {
  'use strict';

App.controller('ChartCtrl', ['$scope', 'Chart',  
	function($scope, Chart) {
	    $scope.data = [{radius:10}];
	    console.log($scope);
    }]
);

}());

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/chart', {
        templateUrl: '/static/views/chart.html',
        controller: 'ChartCtrl'
      });
}]);


