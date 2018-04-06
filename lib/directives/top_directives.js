/**
 * 
 */

app
.directive('topDirective',['$timeout','toastr',function($timeout,toastr){
	return {
        restrict: 'E',       
        templateUrl : 'template/panel/top.tpl.html',
        link: function ($scope, element, attributes) {            	            
            var tooltipElement = element.find('.tip');
                    
            $scope.showToastr = function(type,title,message){
                    console.log('type :', type)   
                    if(type=='info'){
                        toastr.info(message,title)
                    }
                    else if(type=='danger'){
                        toastr.danger(message,title)
                    }
                    else if(type=='success'){
                        toastr.success(message,title)
                    }
                    else if(type=='warning'){
                        toastr.warning(message,title)
                    }                    
            }

            $timeout(function () {            	
            	tooltipElement.tooltip();                
            });
            

        }
    };
}])