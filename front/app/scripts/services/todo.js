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
    function($resource){
      return $resource('http://localhost:8000/api/todos/:id', {},{
        query: { method: 'GET', isArray:false}
      });
  });
