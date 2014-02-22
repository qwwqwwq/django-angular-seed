(function () {
  'use strict';
    App = angular.module('d3Directives');
    App.directive('d3Chart', ['d3', function(d3) {
	return {
	    restrict: 'EA',
		scope: true,
        link: function(scope, element, attrs) {
			var svg = d3.select(element[0])
              .append("svg").attr('height',200);

			scope.$watch('medals', function(newVals, oldVals) {
	            return scope.render(newVals);
			}, true);

			var w = 20,
			h = 80;
 
			var x = d3.scale.linear()
		      .domain([0, 1])
			  .range([0, w]);
 
			var y = d3.scale.linear()
              .domain([0, 100])
              .rangeRound([0, h]);


            // define render function
			scope.render = function(data){
				d3.select("svg").remove();

				var mySvg = d3.select(element[0])
                  .append("svg")
                  .attr("width", "100%")
                  .attr("height", "100%");
				var node = mySvg.selectAll("rect")
				  .data(data)
				  .enter().append("rect")
				  .attr("x", function(d, i) { return x(i) - .5; })
                  .attr("width", w)
                  .attr("height", 0)
                  .attr("y", function(d) { return h - .5;})
                  .transition()
                  .attr("y", function(d) { return h - y(d) - .5; })
                  .attr("height", function(d) { return y(d); })
                  .duration(500)
                  .delay(100);
                  
			};
          }
		};
      }]
    );
    App.directive('d3Circle', ['d3', function(d3) {
	return {
	    restrict: 'EA',
		scope: true,
        link: function(scope, element, attrs) {
			var svg = d3.select(element[0])
              .append("svg").attr('height',200);

			scope.$watch('data', function(newVals, oldVals) {
	            return scope.render(newVals);
			}, true);

          // define render function
			scope.render = function(data){
				d3.select("svg").remove();

				var mySvg = d3.select(element[0])
                  .append("svg")
                  .attr("width", "100%")
                  .attr("height", "100%");
				var node = mySvg.selectAll("circle")
				  .data(data)
				  .enter()
				  .append("circle")
				  .attr("cx", "50%")
	              .attr("cy", "50%")
	              .attr("r",1)
	              .transition()
				  .attr("r", function(d){
				  	return d.radius;
				  })
				  .duration(500)
				  .delay(100);
			};
          }
		};
      }]
    );

}());
