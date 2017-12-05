(function() {
    'use strict';

    angular.module('sslv2App')
        .directive('trend', trend);

    function trend() {
        var directive={
            link:link,
            template:"<div uib-popover-template='{{url}}' popover-triger='{{trigger}}' popover-placement='left' class='glyphicon glyphicon-arrow-right {{status}}'></div>",
            restrict:'E',
            scope:{
                url:'@',
                status:'@',
                trend:'@'
            }
        }
        return directive;

        function link(scope,element,attrs){
            if(attrs.academic === 1){

            }else if(attrs.academic >= 0){

            }
            if(attrs.month === 1){

            }else if(attrs.month >= 0){

            }
        }
    }

})();