describe("Service tests", function () {
  var httpBackend;

  var TestService;
  
  beforeEach(module("AngularTemplateApp"));

  var MockDependencyService;

  beforeEach(function () {
    MockDependencyService = {
      someMethodInDependencyService: function () {
        console.log("calling mock service");
        return 'mockReturnValue';
      }
    };

    module(function ($provide) {
      $provide.value('TestDependencyService', MockDependencyService);
    });

  });


  beforeEach(inject(function (_TestService_, $httpBackend) {
    TestService = _TestService_;
    httpBackend = $httpBackend;
  }));


  it("should do something", function () {
    httpBackend.whenGET("http://test.com/foo").respond({
      someTestResponse: 'someTestValue'
    });

    var result = TestService.useDependency();

    expect(result).toEqual("mockReturnValue");

    TestService.getFromHttp();
    httpBackend.flush();
    console.log(TestService.returnValue.someTestResponse);
    expect(TestService.returnValue.someTestResponse).toEqual('someTestValue');
  });

});