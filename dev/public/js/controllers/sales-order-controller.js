(function(app) {
	app.controller('SalesOrderController', ['$scope','$rootScope','$timeout','$mdSidenav','$mdMenu','$state',
		'SalesOrderService', 
		function($scope,$rootScope,$timeout, $mdSidenav,$mdMenu, $state, SalesOrderService) {
		
		$scope.shipToArray = [
			{"label":"3000 - Smith Inc. LLC", value: "3000"}
		];

		$scope.soldToArray = [
			{"label":"3000 - Smith Inc. LLC", value: "3000"}
		];

		$scope.payerArray = [
			{"label":"3050 - Bush Holdings, Inc.", value: "3050"}
		];

		$scope.organizationArray = [
			{"label":"3000 - USA Philadelphia", value: "3000"}
		];

		$scope.channelArray = [
			{"label":"10 - Final customer sales", value: "10"}
		];

		$scope.divisionArray = [
			{"label":"00 - Cross-division ", value: "00"}
		];

		$scope.officeArray = [
			{"label":"3010 - Office Chicago", value: "3010"}
		];

		$scope.groupArray = [
			{"label":"311 - Group C1", value: "311"}
		];

		$scope.shipToSelected = "";
		$scope.shipTo2Selected = "";
		$scope.soldToSelected = "";
		$scope.payerSelected = "";
		$scope.organizarionSelected = "";
		$scope.channelSelected = "";
		$scope.divisionSelected = "";
		$scope.officeSelected = "";
		$scope.groupSelected = "";

		$scope.changeShipTo = function(item){
			if(item != ""){
				var endpoint = "Meister.Demo.Po.Mat.Catalog";
				var json = '{"VENDOR":"' + item + '","PLANT":"' + item + '","PURORG":"' + item + '"}';
				$scope.promise = SalesOrderService.execute(endpoint, json);
				$scope.promise.then(
		          function(result) { 
		          	console.log("SalesOrderService.execute result",result);		        	  
		     	  },
		          function(errorPayload) {
		              console.log('SalesOrderService.execute failure', errorPayload);
		          }
		     	);
			}
		};

		
	}]);
})(meister);