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
			btnClass:'default',
			action: function(){
				toastr.info('connected')
			}
		},
		{
			btnId:'connect',
			btnIcon:'fa fa-plug',
			btnText:'Connect',
			btnClass:'danger',
			action:function(){
				toastr.success('connected')
			}
		}]
	},
	{
		id:'export',
		iconTitle:'fa fa-cloud-upload',
		title:'Export'
	}
	];		
	
}])