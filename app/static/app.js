'use strict';

var App = angular.module('App', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }]);

App.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = $(element).find('a').attr('href').substring(1);

            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }
    };
}]);

App.directive('waffleSwitch', function() {
    return {
        replace: true,
        restrict: 'A',
        link: function(scope, element, attr){
            element.css('display', waffle.switch_is_active(attr.waffleSwitch) ? '' : 'none');
        }
    };
});

App.directive('myNodes', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var nodes = [{"name": "foo"}, {"name": "bar"}] 
            var mySvg = d3.select(element[0])
                  .append("svg")
                  .attr("width", 100)
                  .attr("height", 100);

            var node = mySvg.selectAll(".node")
             .data(nodes)
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

            element.removeAttr("my-nodes");
            $compile(element)(scope);
            }
        };
    }]);
