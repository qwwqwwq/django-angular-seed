'use strict';

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: '/static/views/test.html',
      });
}]);

App.controller('MainCtrl', function($scope, $location) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular',
    'django-restframework',
    'django-south',
    'django-compressor'
  ];
    $scope.dest = '';
    $scope.some_number = 0;
    $scope.change_view = function(dest) {
	$location.url('/'+dest);
    };
    $scope.show_graphic = function() {

	var sampleSVG = d3.select("#viz")
	    .append("svg")
	    .attr("width", 100)
	    .attr("height", 100);    

	sampleSVG.append("circle")
	    .style("stroke", "gray")
	    .style("fill", "white")
	    .attr("r", 40)
	    .attr("cx", 50)
	    .attr("cy", 50)
	    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
	    .on("mouseout", function(){d3.select(this).style("fill", "white");});
    };
});
