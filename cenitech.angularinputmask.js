/******************************************
 *                                        *
 * Author: Lucas Ceni                     *
 * Email: lucas.ceni at gmail             *
 * Date: 2015                             *
 * github: https://github.com/lceni   *
 *                                        *
 ******************************************/

'use strict';

angular.module('cenitech.angularinputmask', [])
    .directive('inputmask', inputmask);

function inputmask() {
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

            // elem.bind('keyup', function() {
            //      controller.$setViewValue(elem.val());
            //     // do not call $render() since cursor will make this move to end
            // });

            // elem.bind('focus', function() {
            //     controller.$setViewValue(elem.val());
            //     controller.$render();
            // });

            // elem.bind('blur', function() {
            //     controller.$setViewValue(controller.$viewValue);
            //     controller.$render();

            //     if (controller.$viewValue && controller.$viewValue.length > 0) {
            //         var value = controller.$viewValue;
            //         controller.$setValidity('', value && value.indexOf('_') > -1 ? false : true);
            //     }
            // });
        }
    };
}
