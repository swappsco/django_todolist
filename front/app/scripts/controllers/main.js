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

    $scope.submitForm = function(){
        $scope.entry = new Todo();
        $scope.entry.name = $scope.todo.name;
        $scope.entry.description = $scope.todo.description;

            if ($scope.todoForm.$valid) {
                $scope.validForm = true;
                if($scope.todo.id){
                    $scope.entry.id = $scope.todo.id;
                    Todo.update($scope.entry, function(){ 
                        $scope.loadTodos();
                        $scope.resetForm();
                        $scope.switchDisplayForm();
                    });
                }else{
                    Todo.save($scope.entry, function(){ 
                        $scope.loadTodos();
                        $scope.resetForm();
                        $scope.switchDisplayForm();
                    });
                }
            }else{
                $scope.validForm = false;

            }
    };

    $scope.switchDisplayForm = function(){
        $scope.show_todo_form = !$scope.show_todo_form;
    };

    $scope.resetForm = function(){
        $scope.todo = {};
    };

    $scope.deleteTodo = function(todo_item){
        Todo.delete({ id: todo_item.id }, function() {
            $scope.loadTodos();
        }); 
    };

    $scope.checkTodo = function(todo_item){
        Todo.update({ id: todo_item.id, name: todo_item.name, 
            description: todo_item.description, checked: !todo_item.checked }, function() {
            $scope.loadTodos();
        }); 
    };

    $scope.viewTodo = function(todo_item){
        $scope.show_todo_form = true;
        $scope.todo = todo_item;
    };

    $scope.resetForm();
    $scope.loadTodos();

    $scope.show_todo_form = false;
    $scope.validForm = true;

});
