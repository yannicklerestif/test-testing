(function () {
    'use strict';

    angular
        .module('AngularTemplateApp')
        .factory('TestService', TestService);

    TestService.$inject = ['$q', '$timeout'];

    function TestService($q, $timeout) {
        var service = {
            someField: 'someValue',
            someMethod: someMethod
        };

        var somePrivateField;

        return service;

        ////////////

        function someMethod(someParam) {
            $timeout(function() {
                console.log('test');
            }, 1000);
        }
    }

})();
