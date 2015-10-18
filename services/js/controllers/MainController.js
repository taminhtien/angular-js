/*
  Next in the controller, we used the forecast service to fetch data from the server.
  First we added forecast into MainController as a dependency so that it's available to use.
  Then within the controller we used forecast to asynchronously fetch the weather data
  from the server and store it into $scope.fiveDay
*/

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {

    /*
      As before, any properties attached to $scope become available to use in the view.
      This means in index.html, we can display the city_name using an expression as done before.
    */
    $scope.fiveDay = data;
  });
}]);