angular.module('scope',[])
.controller('MyController', ['$scope', '$interval', function($scope, $interval){
	$scope.name='';
	$scope.time='';
	var updateTime = function(){
		$scope.time = new Date().toString();
		console.log('update time');
	}
	var timer = $interval(updateTime, 1000);
	updateTime();
	localStorage['destoryflag']=localStorage['destoryflag'] | 0 +1;

	$scope.$on('$destroy', function(){
		localStorage['destoryflag']=11111111111;
		console.log('1111')
		if ( timer ) {
			//$timeout.cancel(timer);
			localStorage['destoryflag']=2222222222222;
			console.log('scope is destroyed');
		}
	});
}])

.controller('PhoneCtrl', ['$scope', function($scope){

}]);