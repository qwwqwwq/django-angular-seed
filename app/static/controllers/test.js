(function () {
  'use strict';

App.controller('Test', 
    ['$scope', 
	function($scope) {
	    $scope._data = [ {name: 'jeff'} ];
    }]
);

}());

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: '/static/views/test.html',
        controller: 'Test'
      });
}]);


