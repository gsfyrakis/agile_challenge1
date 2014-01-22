'use strict';

var bookingApp = angular.module('bookingApp', [ 
		'bookingServices', 'bookingControllers']);

bookingApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'partials/home.html',
		controller : 'TabCtrl'
	}).otherwise({
		redirectTo : '/home'
	});
} ]);