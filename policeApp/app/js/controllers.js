'use strict';
var bookingControllers = angular.module('bookingControllers', ['ui.bootstrap']);
bookingControllers.controller('TabCtrl', [ '$scope', 
	function TabCtrl($scope) {
		
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
		} ]);