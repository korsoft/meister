(function(app) {
	app.factory('ClaimsService',
    ['$http','SERVER_BASE_URL',
    function ($http,SERVER_BASE_URL) {
        var service = {};

        service.getList = function () {
            return $http.get(SERVER_BASE_URL + '/claims');
        };

        service.getListDetails = function(){
            return $http.get(SERVER_BASE_URL + '/claims/details');
        };

        service.getDetails = function(claimno){
            return $http.get(SERVER_BASE_URL + '/claims/detail/'+claimno);
        }

        service.simulate = function(claimno){
            return $http.get(SERVER_BASE_URL + '/claims/simulate?Json={"CLAIMNO":"' + claimno + '"}');
        }

        return service;
    }]);
})(meister);