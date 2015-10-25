/*
  We used app.directive to create a new directive named 'appInfo'.
  It returns an object with three options:
*/

app.directive('appInfo', function() { 
  return { 
    /*
      restrict specifies how the directive will be used in the view.
      The 'E' means it will be used as a new HTML element.
    */
    restrict: 'E', 

    /*
      scope specifies that we will pass information into this directive
      through an attribute named info.
      The = tells the directive to look for an attribute
      named info in the <app-info> element, like this:

      <app-info info="shutterbugg"></app-info>
    */
    scope: { 
      info: '=' 
    }, 

    /*
      The data in info becomes available to use in the template given by
      templateURL. templateUrl specifies the HTML to use in order to display
      the data in scope.info.
      Here we use the HTML in js/directives/appInfo.html.
    */
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});