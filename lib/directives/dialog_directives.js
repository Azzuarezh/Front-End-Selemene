/**
 * 
 */
app
.directive('dialogDirective',['$timeout',function($timeout){
	return {
	    template: '<ng-include src="getTemplateUrl()"/>',
	    //templateUrl: unfortunately has no access to $scope.user.type
	    scope: {
	        dialog: '=data'
	    },
	    restrict: 'E',
	    controller: function($scope) {
	      //function used on the ng-include to resolve the template
	      $scope.getTemplateUrl = function() {	       
	    	  return 'template/dialog/content/'+ $scope.dialog.id + '.tpl.html';
	      }
	    }
	  };
}])
