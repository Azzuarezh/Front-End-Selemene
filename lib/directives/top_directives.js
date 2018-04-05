/**
 * 
 */

app
.directive('topDirective',['$timeout',function($timeout){
	return {
        restrict: 'E',       
        templateUrl : 'template/panel/top.tpl.html',
        link: function (scope, element, attributes) {            	            
            var tooltipElement = element.find('.tip');                                                      
            $timeout(function () {            	
            	tooltipElement.tooltip();
            });
        }
    };
}])