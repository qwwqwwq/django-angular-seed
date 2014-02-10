(function () {
  'use strict';

    App.
    directive('d3Circle', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          _data: "="
        },
        link: function(scope, iElement, iAttrs) {
            var mySvg = d3.select(element[0])
                  .append("svg")
                  .attr("width", 100)
                  .attr("height", 100);

            var node = mySvg.selectAll(".node")
             .data(scope._data)
             .enter()
             .append("circle")
             .attr("cx", function(d,i){
                return 20+i*50;
             })
             .attr("cy", 50)
             .attr("r", 10)
             .attr("tooltip-append-to-body", true)
             .attr("tooltip", function(d){
                 return d.name;
             });
          }
        }
      }]
    );

}());
