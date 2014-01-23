'use strict';

var metApp = angular.module('metApp', [ 
		'metServices', 'metControllers']);

metApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'partials/home.html',
		controller : 'TabCtrl'
	}).otherwise({
		redirectTo : '/home'
	});
} ]);