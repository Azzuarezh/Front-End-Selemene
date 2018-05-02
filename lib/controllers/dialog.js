/**
 * 
 */

app
.controller('dialogController',['$scope','toastr',function($scope,toastr){
	$scope.dialogs=[{
		id:'connect',
		iconTitle:'fa fa-plug',
		title:'Connect',
		btnControl:[{
			btnId:'testConnection',
			btnIcon:'fa fa-exclamation',
			btnText:'Test',
			btnClass:'default'
		},
		{
			btnId:'connect',
			btnIcon:'fa fa-plug',
			btnText:'Connect',
			btnClass:'danger'			
		}]
	},
	{
		id:'export',
		iconTitle:'fa fa-cloud-upload',
		title:'Export'
	}
	];		
	
}])