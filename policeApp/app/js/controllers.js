'use strict';

var metControllers = angular.module('metControllers', ['ui.bootstrap']);
metControllers.controller('SearchCtrl', [ '$scope', 'Item',
function SearchCtrl($scope, Item) {
	$scope.search = function() { 
		$scope.items = Item.query();
	}
	} ]);

	metControllers.controller('TabCtrl', [ '$scope', 
	function TabCtrl($scope) {
		$scope.tabs = [
		{ title:"Dynamic Title 1", content:'<ng-include src="partials/newCustomer.html" />' },
		{ title:"Dynamic Title 2", content:"Dynamic content 2" }
		];


 $scope.map = {

    showTraffic: true,
        showBicycling: false,
        showWeather: false,
        showHeat: false,
        center: {
        latitude: 45,
            longitude: -73
    },
    options: {
        streetViewControl: false,
            panControl: false,
            maxZoom:20,
            minZoom:3
    },
    zoom: 7,
        dragging: false,
        bounds: {},
    markers: [
        {
            latitude: 51.549751,
            longitude:  -0.177498000,
            showWindow: false,
            title: 'Marker 2'
        },
        {
            latitude: 15,
            longitude: 30,
            showWindow: false,
            title: 'Marker 2'
        },
        {
            icon: 'plane.png',
            latitude: 37,
            longitude: -122,
            showWindow: false,
            title: 'Plane'
        }
    ],
        markers2: [
        {
            latitude: 46,
            longitude: -77,
            showWindow: false,
            title: '[46,-77]'
        },
        {
            latitude: 33,
            longitude: -77,
            showWindow: false,
            title: '[33,-77]'
        },
        {
            icon: 'plane.png',
            latitude: 35,
            longitude: -125,
            showWindow: false,
            title: '[35,-125]'
        }
    ],
        mexiMarkers: [
        {
            latitude: 29.302567,
            longitude: -106.248779
        },
        {
            latitude: 30.369913,
            longitude: -109.434814
        },
        {
            latitude: 26.739478,
            longitude: -108.61084
        }
    ],
        dynamicMarkers: [],
        randomMarkers: [],
        doClusterRandomMarkers: true,
        doUgly: true, //great name :)
        clusterOptions: {title: 'Hi I am a Cluster!', gridSize: 60, ignoreHidden: true, minimumClusterSize: 2,
        imageExtension: 'png', imagePath: 'http://localhost:3000/example/cluster', imageSizes: [72]},
    clickedMarker: {
        title: 'You clicked here',
            latitude: null,
            longitude: null
    },
    events: {
        tilesloaded: function (map, eventName, originalEventArgs) {
        },
        click: function (mapModel, eventName, originalEventArgs) {
            // 'this' is the directive's scope
            $log.log("user defined event: " + eventName, mapModel, originalEventArgs);

            var e = originalEventArgs[0];

            if (!$scope.map.clickedMarker) {
                $scope.map.clickedMarker = {
                    title: 'You clicked here',
                    latitude: e.latLng.lat(),
                    longitude: e.latLng.lng()
                };
            }
            else {
                $scope.map.clickedMarker.latitude = e.latLng.lat();
                $scope.map.clickedMarker.longitude = e.latLng.lng();
            }

            $scope.$apply();
        },
        dragend: function () {
//            self = this;
//            $timeout(function () {
//                modified = _.map($scope.map.mexiMarkers, function (marker) {
//                    return {
//                        latitude: marker.latitude + rndAddToLatLon(),
//                        longitude: marker.longitude + rndAddToLatLon()
//                    }
//                })
//                $scope.map.mexiMarkers = modified;
//            });
        }
    },
    infoWindow: {
        coords: {
            latitude: 36.270850,
                longitude: -44.296875
        },
        options:{
            disableAutoPan:true
        },
        show: false
    },
    templatedInfoWindow: {
        coords: {
            latitude: 48.654686,
                longitude: -75.937500
        },
        options:{
            disableAutoPan:true
        },
        show: true,
            templateUrl: 'templates/info.html',
            templateParameter: {
            message: 'passed in from the opener'
        }
    }

//toggleColor: function (color) {
//    return color == 'red' ? '#6060FB' : 'red';
//}

}}
    ]);

		metControllers.controller('ModalCtrl', [ '$scope', '$modal', 
		function ModalCtrl($scope, $modal) {
			
			$scope.clickEvent = function(obj) {

			        // Log the obj to see everything
			        console.log(obj);

			        // Alert just the data value
			        alert(obj.srcElement.attributes.data.nodeValue);

			    }


			$scope.open = function (obj) {
				$scope.id = obj.srcElement.attributes.data.nodeValue;
				var modalInstance = $modal.open({
					scope: $scope,
					templateUrl: 'partials/listDetails.html',
					controller: ModalInstanceCtrl,
					keyboard: true,
					resolve: {
						items: function () {
							return $scope.items[$scope.id];
						}
					}
				});

				modalInstance.result.then(function (selectedItem) {
					$scope.selected = selectedItem;
				}, function () {
				});
			};
			}]);

			function ModalInstanceCtrl($scope, $modalInstance, items) {
				$scope.items = items;
				$scope.selected = {
					item: $scope.items[$scope.id]
				};

				$scope.close = function () {
					$modalInstance.close($scope.selected.item);
				};
			
			}

			metControllers.controller('DatepickerDemoCtrl', [ '$scope', 
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
				
				metControllers.controller('CustomersCtrl', [ '$scope', 'Customers',
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