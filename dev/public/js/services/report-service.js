(function(app) {
	app.factory('ReportService',
    ['$http','SERVER_BASE_URL',
    function ($http,SERVER_BASE_URL) {
        var service = {};

        service.getListReport = function(){
            return $http.get(SERVER_BASE_URL + '/reports');
        };

        service.getDetails = function(pki){
        	return $http.get(SERVER_BASE_URL + '/reports/detail/' + pki);
        };

        return service;
    }]);
})(meister);