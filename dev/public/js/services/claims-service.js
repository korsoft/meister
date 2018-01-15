(function(app) {
	app.factory('ClaimsService',
    ['$http',
    function ($http) {
        var service = {};

        service.getList = function (callback) {

            var response = {};
            response.claims = [{"CLAIMNO":"000400000080","WBS":"1-TR"},{"CLAIMNO":"000400000082","WBS":"E9990"},{"CLAIMNO":"000400000101","WBS":"1-1200/1"},{"CLAIMNO":"000400000102","WBS":"1-1200/1"},{"CLAIMNO":"000400000103","WBS":"1-1200/1"},{"CLAIMNO":"000400000104","WBS":"1-1200/1"},{"CLAIMNO":"000400000105","WBS":"1-1200/X/1"},{"CLAIMNO":"000400000106","WBS":"1-1200/X/31"},{"CLAIMNO":"000400000108","WBS":"1-1200/X/21"},{"CLAIMNO":"000400000110","WBS":"1-1200/X/21"},{"CLAIMNO":"000400000114","WBS":"1-1200/X/32"}];
            callback(response);

        };
 

        return service;
    }]);
})(meister);