(function () {
  'use strict';

App.controller('ChartCtrl', ['$scope', 'Chart',  
	function($scope, Chart) {
		$scope.medals = [0,0,0];
		$scope.chartId = 1;
		$scope.$watch('chartId', function() {
			Chart.get({chartId:$scope.chartId}, function(data) {
				$scope.medals[0] = data.gold_medals;
				$scope.medals[1] = data.silver_medals;
				$scope.medals[2] = data.bronze_medals;
			  }
			);
		});
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


