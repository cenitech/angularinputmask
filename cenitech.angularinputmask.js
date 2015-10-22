/******************************************
 *                                        *
 * Author: Lucas Ceni                     *
 * Email: lucas.ceni at gmail             *
 * Date: 2015                             *
 * github: https://github.com/lucasceni   *
 *                                        *
 ******************************************/

'use strict';

angular.module('cenitech.angularinputmask', [])
    .directive('inputmask', inputmask);

function inputmask($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, controller) {
            var toUpdate = true;
            scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                if (toUpdate) {
                    $(elem).val(newValue);
                }
                toUpdate = true;
            });

            $(elem).inputmask();
            $(elem).keyup(function() {
                toUpdate = false;
                controller.$setViewValue(elem.val());
            });

            $(elem).blur(function() {
                toUpdate = true;
            });
        }
    };
}
