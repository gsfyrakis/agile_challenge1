'use strict';

var bookingControllers = angular.module('bookingControllers', ['ui.bootstrap']);
bookingControllers.controller('SearchCtrl', [ '$scope', 
function SearchCtrl($scope) {
	$scope.search = function() {
		$scope.item = {}
		$scope.item.id = 'hello';
		$scope.items
	}
} ]);

bookingControllers.controller('TabCtrl', [ '$scope', 
function TabCtrl($scope) {
	$scope.tabs = [
	    { title:"Dynamic Title 1", content:'<ng-include src="partials/newCustomer.html" />' },
	    { title:"Dynamic Title 2", content:"Dynamic content 2" }
	  ];
} ]);

	bookingControllers.controller('CustomersCtrl', [ '$scope', 'Customers',
	function CustomersCtrl($scope, Customers) {

		// Define a refresh function, that updates the data from the REST
		// service
		$scope.refresh = function() {
			$scope.customers = Customers.query();
		};

		// Define a reset function, that clears the prototype newMember
		// object, and
		// consequently, the form
		$scope.reset = function() {
			// clear input fields
			$scope.newCustomer = {};
		};

		// Define a register function, which adds the member using the REST
		// service,
		// and displays any error messages
		$scope.register = function() {
			$scope.successMessages = '';
			$scope.errorMessages = '';
			$scope.errors = {};

			Customers.save($scope.newCustomer, function(data) {

				// mark success on the registration form
				$scope.successMessages = [ 'Customer Registered' ];

				// Update the list of members
				$scope.refresh();

				// Clear the form
				$scope.reset();
			}, function(result) {
				if ((result.status == 409) || (result.status == 400)) {
					$scope.errors = result.data;
				} else {
					$scope.errorMessages = [ 'Unknown  server error' ];
				}
				$scope.$apply();
			});

		};

		// Call the refresh() function, to populate the list of members
		$scope.refresh();

		// Initialize newMember here to prevent Angular from sending a
		// request
		// without a proper Content-Type.
		$scope.reset();

		// Set the default orderBy to the name property
		$scope.orderBy = 'firstname';
		}]);

		bookingControllers.controller('DatepickerDemoCtrl', [ '$scope', 
		function DatepickerDemoCtrl($scope) {
			$scope.today = function() {
				$scope.dt = new Date();
			};
			$scope.today();

			$scope.showWeeks = true;
			$scope.toggleWeeks = function () {
				$scope.showWeeks = ! $scope.showWeeks;
			};

			$scope.clear = function () {
				$scope.dt = null;
			};

			$scope.open = function($event) {
				$event.preventDefault();
				$event.stopPropagation();

				$scope.opened = true;
			};

			$scope.dateOptions = {
				'year-format': "'yy'",
				'starting-day': 1
			};

			$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
			$scope.format = $scope.formats[0];
			}]);