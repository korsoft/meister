(function(app) {
	app.controller('ReportingController', ['$scope','$rootScope','$timeout','$filter','$mdSidenav','$mdMenu','$mdMedia','$state',
		'$mdDialog','ReportingService',
		function($scope,$rootScope,$timeout, $filter, $mdSidenav,$mdMenu, $mdMedia, $state, $mdDialog, ReportingService ) {
		
		$scope.t_code_report_hint = "";
		$scope.report = {};
		$scope.reportSelected = [];
		$scope.loadingReports = false;

		$scope.params = [];
		$scope.loadingParams = false;

		$scope.reportsFinder = function(){
			var endpoint = "Meister.SDK.Report.Finder";
			var json = '[{"HINT":"' + $scope.t_code_report_hint + '"}]';
			$scope.report = {};
			$scope.params = [];
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

		$scope.onReportSelected = function(){
			console.log("onReportSelected",$scope.reportSelected);
			$scope.loadParametersByReport();
		};

		$scope.loadParametersByReport = function(){
			$scope.params = [];
			if($scope.reportSelected.length>0){
				var endpoint = "Meister.SDK.Report.Parameters";
				var json = '{"REP_TCODE":"' + $scope.reportSelected[0].ENUMS[0].NAME + '"}';
				$scope.loadingParams = true;
				$scope.paramsProgress = ReportingService.execute(endpoint, json);
				$scope.paramsProgress.then(
		          function(result) { 
		          	$scope.loadingParams = false;
		          	console.log("loadParametersByReport => result",result);
		          	$scope.params = result.data.Json[0].SELECTIONS.METADATA[0].PARAMETERS;
		          },
		          function(errorPayload) {
		          	$scope.loadingReports = false;
		              console.log('loadParametersByReport => failure', errorPayload);
		          }
		     	);
			}
		};

	}]);
})(meister);