'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should create 3 todos', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MainCtrl', {$scope:scope});
    expect(scope.todos.length).toBe(3);
  }));
  
});
