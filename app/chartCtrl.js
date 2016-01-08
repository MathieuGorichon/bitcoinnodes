var app = angular.module('app', ['easypiechart']);
app.controller('chartCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.anotherOptions = {
		animate:{
			duration:0,
			enabled:false
		},
		barColor:'#FF9900',
		trackColor:false,
		scaleColor:false,
		lineWidth:10,
		lineCap:'circle',
		size: 300
	};
	$http.get('http://localhost:3000/nexthalving').success(function(response) {
		$scope.days = response.days;
		$scope.percent = response.percent;
	});
}]);