'use strict';

angular.module('bookingServices', ['ngResource'])
    .factory('Customers', function($resource){
	return $resource('rest/customers/:customerId', {customerId:'@customerId'});
}).factory('Taxis', function($resource){
	return $resource('rest/taxis/:taxiId', {});
}).factory('Bookings', function($resource){
	return $resource('rest/bookings/:bookingId', {bookingId:'@bookingId'});
});