/**
 * 
 */
app.controller('EvenorOddCtrl',function($scope){
	
$scope.evenOrOdd=function(){
	console.log('entered number is '+$scope.number)
	if($scope.number%2==0)
		$scope.result="Even"
		else
			$scope.result="Odd"
}
})