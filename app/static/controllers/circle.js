(function () {
  'use strict';

App.controller('Circle', 
	function($scope) {
	    $scope.data = [{radius:10}];
    }
);

}());

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/circle', {
        templateUrl: '/static/views/circle.html',
        controller: 'Circle'
      });
}]);


