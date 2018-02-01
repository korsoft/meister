(function(app) {
	app.controller('ReportSummaryController', ['$scope','$state','$mdMedia','$mdDialog','$stateParams','ReportService', 
		function($scope,$state, $mdMedia,$mdDialog, $stateParams, ReportService) {
		


		$scope.data = {};
		
		$scope.isMobileDevice = $mdMedia('xs');

		$scope.init = function(){
			console.log($stateParams.PKY);
			$scope.promise = ReportService.getDetails($stateParams.PKY);
	    	
	    	$scope.promise.then(
		          function(result) { 
		            	$scope.data = result.data;
			    		
		          },
		          function(errorPayload) {
		              console.log('failure loading report details', errorPayload);
		          }
		     );
		}

		$scope.gotoReport = function(r){
			$state.go('reports');
		};
		
		
	}]);
})(meister);