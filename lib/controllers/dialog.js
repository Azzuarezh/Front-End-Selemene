/**
 * 
 */

app
.controller('dialogController',['$scope',function($scope){
	$scope.dialogs=[{
		id:'connect',
		iconTitle:'fa fa-plug',
		title:'Connect',
		btnControl:[{
			btnId:'testConnection',btnIcon:'fa fa-exclamation',btnText:'Test',btnClass:'default'
		},
		{
			btnId:'connect',btnIcon:'fa fa-plug',btnText:'Connect',btnClass:'info'
		}]
	},
	{
		id:'export',
		iconTitle:'fa fa-cloud-upload',
		title:'Export'
	}
	];		
	
}])