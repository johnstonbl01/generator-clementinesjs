'use strict';

(function () {
	angular
		.module('clementineApp')
		.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {

			function getUserData () {
				userFactory.getData()
					.success(function (data) {
						$scope.userName = data.username;
						$scope.displayName = data.displayName;
						$scope.twitterId = data.id;
				});
			}

			getUserData();

		}]);
})();
