describe('Some test group', function () {

  beforeEach(module('AngularTemplateApp'));

  var $controller;

  var TestServiceMock;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  beforeEach(function() {
    TestServiceMock = {
      somePublicMethodInTestService: function() {
        console.log("In some public method in test service mock");
      },
      someOtherMethod: function() {
      }

    };
  });

  describe('some inner test group', function () {
    it('some elementary test', function () {
      var $scope = {};
      var controller = $controller('TestCtrl', { $scope: $scope, TestService: TestServiceMock });
      console.log(controller.somePublicField);
      controller.TestService.somePublicMethodInTestService();
      expect(controller.somePublicField).toBe("some public value");
    });
  });

});