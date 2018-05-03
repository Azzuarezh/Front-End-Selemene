/**
 * 
 */
app
.directive('dialogDirective',['$timeout','toastr','$http',function($timeout,toastr,$http){
	return {
	    template: '<ng-include src="getTemplateUrl()"/>',
	    require:'ngModel',
	    //templateUrl: unfortunately has no access to $scope.user.type
	    scope: {
	        dialog: '=data'	        
	    },
	    restrict: 'E',
	    controller: function($scope,$http) {
	      //function used on the ng-include to resolve the template
	      $scope.getTemplateUrl = function() {	       
	    	  return 'template/dialog/content/'+ $scope.dialog.id + '.tpl.html';
	      }
				
	      //function post form via angluar
	      $scope.testConnection = function(){
	    	  	properties ={
		    		  'driver':$scope.driver,
		    		  'serverName':$scope.serverName,
		    		  'port':$scope.port,
		    		  'userName':$scope.userName,
		    		  'password':$scope.password
		      	}	    	  
	    	  console.log('connection properties :',properties);
	    	  $http.post("http://localhost:8080/checkConnection",properties)
	    	  .then(function mySuccess(response) {
	    	        console.log('response : ',response)
	    	    }, function myError(response) {
	    	    	console.log('error: ',response)
	    	    });
	      }
	      	      
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
