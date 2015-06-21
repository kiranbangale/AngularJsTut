var myApp = angular.module('myApp',['ngRoute']);

myApp.controller("myProductDetailCtrl", function($scope) {
	$scope.isHidden = true;	
	$scope.showHideColors = function() {
			$scope.isHidden = !$scope.isHidden;
		};
	$scope.colorArray = ['pink', 'purple', 'olive', 'cyne', 'gray']
});
myApp.filter("suraj", function () {
	return function(txt) {
		return txt + "Suraj";
	}
});
myApp.directive("colorList", function ($compile) {
	return{
		restrict:'AE',
		template: "<button ng-click='showHideColors()' type='button'>"
				+ "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
				+ "</button><div ng-hide='isHidden' id='colorContainer'>"
				+ "</div>",
		// templateUrl: , replace: --> can be used instead of template
		link: function ($scope, $element) {
			// set default state of hide/show
				$scope.isHidden = true;
			// add function to manage hide/show state
				$scope.showHideColors = function () {
					$scope.isHidden = !$scope.isHidden;
				}
			// DOM manipulation
				var colorContainer = $element.find('div');
				angular.forEach($scope.$parent.colorsArray, function (color) {
					var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
					colorContainer.append(appendString);
				});
			}
	}
});