'use strict';

angular.module('metServices', ['ngResource'])
    .factory('Item', function($resource) {
	return $resource('phones.json', {method:'GET', isArray:true});
});