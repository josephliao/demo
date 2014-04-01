var demoApp = angular.module('demoApp', ['ngRoute']);
			demoApp.config(function($routeProvider) {
				$routeProvider
					.when('/view1', {
						controller: 'SimpleController',
						templateUrl: 'include/View1.html'
					})
					.when('/view2', {
						controller: 'SimpleController',
						templateUrl: 'include/View2.html'
					})
					.otherwise({
						redirectTo: '/view1'
					});
			});
			demoApp.factory('simpleFactory', function(){
				var customers = [
					{name:'Dave Jones', city: 'phoenix'},
					{name:'Jimmy Doe', city: 'atlanta'},
					{name:'Jenny Doe', city: 'chandler'},
					{name:'Mike Smith', city: 'New York'}
				];
				var factory = {};
				factory.getCustomers = function(){
					return customers;
				};
				
				factory.postCustomer = function(customer){
				
				};
				return factory;
			});
			demoApp.controller('SimpleController', function($scope, simpleFactory){
				$scope.customers = [];
				init();
				function init(){
					$scope.customers = simpleFactory.getCustomers();
				};
				$scope.addCustomer = function(){
					$scope.customers.push(
						{
							name: $scope.newCustomer.name, 
							city: $scope.newCustomer.city
						});
				};
			});
