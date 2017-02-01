(function () {
    'use strict';

    angular
        .module('avaliacao360AjosecApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
