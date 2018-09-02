var MongoDumpServiceModule = angular.module('MongoDumpServiceModule', []);

MongoDumpServiceModule.factory('MongoDumpService', [ '$http', '$rootScope', '$location', '$mdDialog', function($http, $rootScope, $location, $mdDialog) {

	return {

		/**
		 * Returns the scheduled dumps
		 */
		getSchedules : function() {

			return $http.get(apiUrl + '/mongo-dump-scheduler/schedules');

		}

	}

} ]);
