/**
 * 
 */

app
.controller('leftController',['$scope','$resource',function($scope,$resource){
	//request ajax
	var dbService = $resource('http://localhost:8080/getListOfDatabases');
	var dbs = dbService.query();
	//ajax function for db
	$scope.listDatabase =[];	
	
	/*dbs.$promise.then(function(dataDb){				
		//loop each db to push in array listDatabase
		for(var i = 0; i < dataDb.length; i++){			
			//initialize new dbObject which contain db name and list of the table
			var dbObject = {
					name : dataDb[i].DATABASE_NAME
			}
			$scope.listDatabase.push(dbObject);			
		}		
	})*/
	
}])