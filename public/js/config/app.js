var meister = angular.module('meister', ['ngMaterial', 'ngAnimate','ngSanitize', 'ngMessages',
 'ngAria', 'ui.router','ngCookies','md.data.table','chart.js']);

meister.constant('SERVER_BASE_URL', "http://localhost:8000/api");
meister.constant('USERID',"DEMOUSER");
meister.constant('SO_BUSOBJECT',"BUS2032");
meister.constant('PO_BUSOBJECT',"BUS2012");
meister.constant('SALES_ORGANIZATION_FIELD',"SALESORG");
meister.constant('DISTRIBUTION_CHANNEL_FIELD',"DISTCHL");
meister.constant('DIVISION_FIELD',"SALESDIV");
meister.constant('SALES_GROUP_FIELD',"SALESGRP");
meister.constant('SALES_OFFICE_FIELD',"SALESOFF");
meister.constant('CUSTOMER_NUMBER_FIELD',"PARTNER");
meister.constant('VENDOR_FIELD',"VENDOR");
meister.constant('PURCHASE_GROUP_FIELD',"PORG");

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('login', {
		url: '/login',
		templateUrl: 'partials/login-partial.html',
		controller: 'LoginController'
	})

	.state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about-partial.html',
            controller: 'AboutController'
        })
        .state('claims', {
            url: '/claims',
            templateUrl: 'partials/claims-partial.html',
            controller: 'ClaimsController',
            params: {
                filters: []
            }
        })
        .state('sales_order', {
            url: '/SalesOrder',
            templateUrl: 'partials/sales-order-partial.html',
            controller: 'SalesOrderController',
            params: {
                filters: []
            }
        })
        .state('purchase_order', {
            url: '/PurchaseOrder',
            templateUrl: 'partials/purchase-order-partial.html',
            controller: 'PurchaseOrderController',
            params: {
                filters: []
            }
        })
        .state('reports', {
            url: '/reports',
            templateUrl: 'partials/reports-partial.html',
            controller: 'ReportsController',
            params: {
                filters: []
            }
        })
        .state('reporting', {
            url: '/reporting',
            templateUrl: 'partials/reporting-partial.html',
            controller: 'ReportingController',
            params: {
                filters: []
            }
        })
        .state('claim-details', {
            url: '/claims-details',
            templateUrl: 'partials/claim-details-partial.html',
            controller: 'ClaimDetailsController',
            params: {
                claimno: ''
            }
        })
        .state('reports-summary', {
            url: '/reports-summary',
            templateUrl: 'partials/reports-summary-partial.html',
            controller: 'ReportSummaryController',
            params: {
                PKY: '',
                reportName: ''
            }
        });

    }]).run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/');
            }
        });
    }]);
})(meister);
