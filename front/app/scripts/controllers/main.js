'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MainCtrl', function ($scope, $http, Todo) {

    $scope.loadTodos = function(){
        var data = Todo.query(
            function(){
                $scope.todos = data.results;
            }
        );
    };

    $scope.createTodo = function(){
        console.log("Clicked the button");
        $scope.entry = new Todo();
        $scope.entry.name = $scope.todo.name;
        $scope.entry.description = $scope.todo.description;
        Todo.save($scope.entry, function(){ 
            $scope.loadTodos();
            $scope.resetForm();
            $scope.switchDisplayForm();
        });
    };

    $scope.switchDisplayForm = function(){
        // $scope.show_todo_form = !$scope.show_todo_form;
        if($scope.show_todo_form){
            $scope.show_todo_form = false;
        }
        else{
            $scope.show_todo_form = true;
        }
    };

    $scope.resetForm = function(){
        $scope.todo = {};
    };

    $scope.deleteTodo = function(todo_item){
        console.log("Delete TODO:"+todo_item.id);
    };

    $scope.resetForm();
    $scope.loadTodos();

    $scope.show_todo_form = false;

});
