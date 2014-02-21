(function () {
  'use strict';

App.controller('Circle', 
	function($scope) {
	    $scope.data = [{radius:10}];
	    console.log($scope);
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


