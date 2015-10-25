/*
  1. We made a new service. We used app.factory to create a new service named forecast

  2. The forecast service needs to use AngularJS's built-in $http to fetch JSON from the server.
  Therefore, we add $http to the forecast service as a dependency, like this:
    ['$http', function($http) {
      // ...
    }]
  Now $http is available to use inside forecast.

  3. Then, inside forecast, we use $http to construct an HTTP GET request for the weather data.
  If the request succeeds, the weather data is returned; otherwise the error info is returned.
*/

app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);