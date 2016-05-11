(function () {
    'use strict';

    angular
        .module('AngularTemplateApp')
        .factory('TestDependencyService', TestDependencyService);

    TestDependencyService.$inject = [];

    function TestDependencyService() {
        var service = {
            someMethodInDependencyService: someMethodInDependencyService
        };

        return service;

        ////////////

        function someMethodInDependencyService() {
            return "real method called";
        }
    }

})();
