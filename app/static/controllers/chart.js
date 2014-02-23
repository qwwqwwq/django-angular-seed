(function () {
  'use strict';

App.controller('ChartCtrl', ['$scope', 'Chart',  'Charts',
	function($scope, Chart, Charts) {
		$scope.charts = [];
		$scope.charts = Charts.query();
		$scope.medals = [1,1,1];
		$scope.chartId = undefined;
		$scope.$watch('chartId', function() {
			if ($scope.chartId == undefined) { return; };
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


