(function(app) {
	app.controller('ClaimDetailsController', ['$scope','$timeout','$mdSidenav','$mdMenu','$location','ClaimsService', 
		function($scope,$timeout, $mdSidenav, $mdMenu,$location, ClaimsService) {
		

		$scope.claim = {};
		$scope.tabSelected = 1;
		$scope.is_simulated = false;

		$scope.costs = [{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"}];

		$scope.budgets = [
			{wbs:"123",items:[{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"}]},
			{wbs:"143",items:[{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"}]},
			{wbs:"566",items:[{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"},{item_no:1,category:"M",cost:"000027",plant:"3000",price:"1034"}]}	
			];


		_.forEach($scope.budgets,function(b){
			b.$show = false;
		});	

		$scope.simulate = function(){
			$scope.is_simulated = true;
		};
	}]);
})(meister);