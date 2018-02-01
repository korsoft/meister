(function(app) {
	app.factory('ReportService',
    ['$http','SERVER_BASE_URL',
    function ($http,SERVER_BASE_URL) {
        var service = {};

        service.getListReport = function(){
            var params = {
                Endpoint: 'meister.report.scheduler',
                Parms: '[{"METADATA":"","REPORT_TYPE":"T"}]',
                Json: '{"USERNAME":"AROSENTHAL","REPORT":{"MODE":"R","NAME":"RM07DOCS","PARAMETERS":[{"SELNAME":"MATNR","KIND":"S","SIGN":"I","OPTION":"EQ","LOW":"CK-700"}]},"EMAIL":"AXROSENTHAL@GMAIL.COM","VIA_EMAIL":"X"}'
            }
            return $http.get('http://meisterv2.dyndns.org:8000/sap/opu/odata/MEISTER/ENGINE/Execute?$format=json',{
                headers: {'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='},params: params
            });
        };

        return service;
    }]);
})(meister);