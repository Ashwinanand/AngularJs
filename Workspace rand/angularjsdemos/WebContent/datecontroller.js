/**
 * 
 */
app.controller('DateCtrl',function($scope){
	var today=new Date();
$scope.today=today;
console.log(today)
$scope.welcome="Welcome to angular js"
console.log('entered name is '+$scope.name)

})