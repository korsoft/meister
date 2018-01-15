(function(app) {
	app.controller('ClaimsController', ['$scope','$timeout','$mdSidenav','$mdMenu','$state','ClaimsService', 
		function($scope,$timeout, $mdSidenav, $mdMenu,$state, ClaimsService) {
		$scope.toggleLeft = buildToggler('left');
    	$scope.toggleRight = buildToggler('right');
    	$scope.claims = [];	
    	$scope.selected = [];


	    function buildToggler(componentId) {
	      return function() {
	        $mdSidenav(componentId).toggle();
	      };
	    }

	    $scope.gotoClaimDetails = function(claim){
	    	$state.go('claim-details');
	    };

	    ClaimsService.getList(function(response){
	    	$scope.claims = response.claims;
	    	console.log("claims",$scope.claims);
	    });

	}]);
})(meister);
