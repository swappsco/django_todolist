'use strict';

/**
 * @ngdoc service
 * @name frontApp.Todo
 * @description
 * # Todo
 * Factory in the frontApp.
 */
angular.module('frontApp')
  .factory('Todo', 
    function($resource, configuration){
      return $resource(configuration.API_URL+'/todos/:id', {},{
        query: { method: 'GET', isArray:false}
      });
  });
