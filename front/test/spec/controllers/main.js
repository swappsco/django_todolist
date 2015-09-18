'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('frontApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('default values', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MainCtrl', {$scope:scope});

    expect(scope.show_todo_form).toBe(false);
    expect(scope.validForm).toBe(true);
  }));

  it('reset form', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MainCtrl', {$scope:scope});
      scope.todo = {name:'My Todo Name', description:'Todo Description'};
      scope.resetForm();
    expect(scope.todo).toEqual({});
  }));

  it('switch form view', inject(function($controller) {
      var scope = {},
          ctrl = $controller('MainCtrl', {$scope:scope});
      scope.switchDisplayForm();
    expect(scope.show_todo_form).toBe(true);
  }));

});
