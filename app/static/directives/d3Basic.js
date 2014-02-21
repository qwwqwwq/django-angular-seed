(function () {
  'use strict';
    App = angular.module('d3Directives');

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
				console.log(scope);
				console.log(data);
				console.log(element);
				svg.selectAll("*").remove();
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
