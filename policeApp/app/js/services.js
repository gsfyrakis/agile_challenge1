'use strict';

angular.module('bookingServices', ['ngResource'])
    .factory('Customers', function($resource){
	return $resource('rest/customers/:customerId', {customerId:'@customerId'});
});