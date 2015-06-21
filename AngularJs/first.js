// var kiran = {};
// kiran.init = function () {

	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.controller('StudentRecordCtrl', function ($scope) {
			$scope.students = ['kiran', 'suraj', 'komal'];
		}
	);

	myApp.controller('GreetingsCtrl', function ($scope) {
		$scope.isHidden = false;
		$scope.showGreetings = function () {
			$scope.isHidden = !$scope.isHidden;
		}

	});

	myApp.config(function ($routeProvider) {

		$routeProvider
		.when('/', {
			controller: 'StudentRecordCtrl',
			templateUrl: 'index.html'
		})
		.when('/view1', {
			controller: 'StudentRecordCtrl',
			templateUrl: '/view1.html'
		})
		.otherwise({redirectTo:'www.google.com'});

		}
	);
// } 

