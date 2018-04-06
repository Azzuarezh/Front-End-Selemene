/**
 * 
 */
app
.directive('dialogDirective',['$timeout','toastr',function($timeout,toastr){
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
	      $scope.serverName ='localhost';

	      $scope.listDriver = [{
	      	'label':'MySQL',
	      	'icon':'mysql',
	      	'value':'MySQL'
	      },
	      {
	      	'label':'SQL Server',
	      	'icon':'mssql',
	      	'value':'SQLServer'
	      },
	      {
	      	'label':'PostgreSQL',
	      	'icon':'postgres',
	      	'value':'PostgreSQL'
	      },
	      {
	      	'label':'Oracle',
	      	'icon':'oracle-alt',
	      	'value':'Oracle'
	      }
	      ]

	      $scope.selectedDriver={
	      	'label':'SQL Server',
	      	'icon':'mssql',
	      	'value':'SQLServer'
	      };
	    }
	  };
}])
