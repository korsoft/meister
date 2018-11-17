(function(app) {
	app.controller('ReportingController', ['$scope','$rootScope','$timeout','$filter','$mdSidenav','$mdMenu','$mdMedia','$state',
		'$mdDialog','ReportingService',
		function($scope,$rootScope,$timeout, $filter, $mdSidenav,$mdMenu, $mdMedia, $state, $mdDialog, ReportingService ) {
		
		$scope.t_code_report_hint = "";
		$scope.report = {};
		$scope.reportSelected = [];
		$scope.loadingReports = false;

		$scope.reportsFinder = function(){
			var endpoint = "Meister.SDK.Report.Finder";
				var json = '[{"HINT":"' + $scope.t_code_report_hint + '"}]';
				$scope.loadingReports = true;
				$scope.reportsFinderProgress = ReportingService.execute(endpoint, json);
				$scope.reportsFinderProgress.then(
		          function(result) { 
		          	$scope.loadingReports = false;
		          	console.log("reportsFinder => result",result);		        	  
		          	var resultObject = result.data.Json[0].RESULTS;
		          	if(resultObject.length>0){
		          		$scope.report.columns = _.keys(resultObject[0].ENUMS[0]);
		          		$scope.report.rows = resultObject;
		          	} else {
		          		$scope.report = {};
		          	}
		          	console.log("Reports =>",$scope.report);
		          },
		          function(errorPayload) {
		          	$scope.loadingReports = false;
		              console.log('reportsFinder => failure', errorPayload);
		          }
		     	);
		};

	}]);
})(meister);