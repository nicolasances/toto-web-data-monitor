var DashboardModule = angular.module("DashboardModule", [ "MongoDumpServiceModule" ]);

DashboardModule.controller("DashboardController", function($rootScope, $scope, $http, $timeout, $mdDialog, MongoDumpService) {

	$scope.initContext = function() {

		$scope.getDumpSchedules();

	}

	// Retrieves the list of mongo dump schedules
	$scope.getDumpSchedules = function() {

		MongoDumpService.getSchedules().success(function(data) {

			$scope.mongoDumpSchedules = data;
		})

	}

	$scope.initContext();

});
