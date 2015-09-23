
var mainApp = angular.module("mainApps", ['ngRoute']);

         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider
            
            .when('/registration', {
               templateUrl: 'registration.htm',
               controller: 'registrationController'
            })
            
            .when('/currency', {
               templateUrl: 'currency.htm',
               controller: 'currencyController'
            })

             .when('/contact', {
               templateUrl: 'contact.htm',
               controller: 'contactController'
            })
             .when('/board', {
               templateUrl: 'board.htm',
               controller: 'boardController'
            })
            
            .otherwise({
               redirectTo: '/registration'
            })
         }]);
         
         mainApp.controller('registrationController', function($scope) {
            $scope.message = "Welcome to cytonn currencies.Please register with us before you can use our currency converter. Thank you in advance.";
         });
         
         mainApp.controller('currencyController', function($scope) {
            $scope.message = "This page will be used to display currency application";
            $scope.dollar=98;
            $scope.sterling=120;
         });
          mainApp.controller('contactController', function($scope) {
            $scope.message = "Cytonn currencies is an online currency converter provided by Cytonn Investments in conjunction with cytonn technologies to give forex traders a reliable tool for international currency conversion.";
         });
           mainApp.controller('boardController', function($scope, $http) {
            $http.get("http://www.w3schools.com/angular/customers.php").success(function(response){$scope.names = response.records;});
            $scope.message = "Cytonn currencies is an online currency converter provided by Cytonn Investments in conjunction with cytonn technologies to give forex traders a reliable tool for international currency conversion.";
         });

          
          mainApp.directive('footer', function() {
           return {
          restrict: 'E',
          template: '<footer class="text-center">@2015 Cytonn Currencies All rights reserved.</footer>'
         };
      });


