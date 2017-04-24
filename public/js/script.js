        var app = angular.module("UserManagement", []);
            app.controller("UserManagementController", function($scope, $http) {
                //Now load the data from server
                _refreshPageData();
				
				recentData();
                function _refreshPageData() {
                    $http({
                        method : 'GET',
                        url : 'https://demo2697834.mockable.io/movies'
                    }).then(function successCallback(response) {	                  					
						for (var i=0;i<response.data.totalCount;i++)
						{
						 $scope.employees = response.data.entries;
						//  console.log(response.data.entries[i].title);
						}						
                    }, function errorCallback(response) {
                       // console.log(response.statusText);
                    });
                }
	
				$scope.myFunc = function(e,param) {
					
					
					var myurl =e.srcElement.currentSrc;
					  var formData = {
						  'vurl'              : myurl,
						  'vtitle'    :  param.title,
						  'vurl2' :param.contents[0].url
					  };
                    $http({
                        method : 'POST',
                        url : 'http://localhost/setdata',
						withCredentials: true,
						headers: {
						'Authorization': 'Basic bashe64usename:password'
						},
						data: formData
                    }).then(function successCallback(response) {	                  					
										
                    },function errorCallback(response) {
                       // console.log(response.statusText);
                    });
    };
			
			function recentData() {
				
                    $http({
                        method : 'GET',
                        url : 'http://localhost/recent',
						withCredentials: true, 
						headers: {
            'Authorization': 'Basic bashe64usename:password'
        }
                    }).then(function successCallback(response) {
                        	

                     for (var i=0;i<response.data.length;i++)
						{
						 $scope.recentdata = response.data;
						//console.log(response.data[i].imgurl);
						}
						
										
                    },function errorCallback(response) {
                       //console.log(response.statusText);
                    });
                }
				
            });
			
			
		var app = angular.module('myApp', []);
			  app.controller('myCtrl', function($scope, $http) {
				 $http.get("welcome.htm")
				.then(function(response) {
				 $scope.myWelcome = response.data;
			});
		});
			