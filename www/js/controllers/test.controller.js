(function () {
    'use strict';

    angular
        .module('AngularTemplateApp')
        .controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = ['$scope', 'TestService'];

    function TestCtrl($scope, TestService) {

        var vm = this;
        vm.somePublicField = "some public value";
        vm.TestService = TestService;
        vm.somePublicMethod = somePublicMethod;

        // $scope.$on('some_event', function (event, arg) {
        //     console.log('some_event triggered with arg : ' + arg);
        // });

        ////////////

        function somePublicMethod() {
            $scope.$broadcast('some_event', 'some arg');
            $scope.$apply(function() {
                console.log('applying...');
            })
        }

    }

})();
