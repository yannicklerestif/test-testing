(function () {
    'use strict';

    angular
        .module('AngularTemplateApp', [])
        .constant('SOME_CONSTANT', 'some constant')
        .run(run);

    run.$inject = [];

    function run(Locale) {
    }

})();
