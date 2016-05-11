(function () {
  'use strict';

  angular
      .module('AngularTemplateApp')
      .factory('TestService', TestService);

  TestService.$inject = ['$q', '$timeout', 'TestDependencyService', '$http'];

  function TestService($q, $timeout, TestDependencyService, $http) {
    var service = {
      someField: 'someValue',
      returnValue: '',
      someMethod: someMethod,
      useDependency: useDependency,
      getFromHttp: getFromHttp
    };

    var somePrivateField;

    return service;

    ////////////

    function useDependency() {
      return TestDependencyService.someMethodInDependencyService();
    }

    function someMethod(someParam) {
      $timeout(function () {
        console.log('test');
      }, 1000);
    }

    function getFromHttp() {
      $http.get('http://test.com/foo').then(function (response) {
            service.returnValue = response.data;
          }
      )
    }
  }

})();
