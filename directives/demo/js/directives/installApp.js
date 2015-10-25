/*
  use app.directive to create a new directive named installApp
*/
app.directive('installApp', function() { 
  return { 
    /*
      use the restrict option to create a new Element
    */
    restrict: 'E',

    /*
      set the scope option to an empty object {}
    */ 
    scope: {
    }, 

    /*
      use the templateUrl option to tell this directive to use the js/directives/installApp.html file
    */
    templateUrl: 'js/directives/installApp.html',

    /*
      The link is used to create interactive directives that respond to user actions.
      
      scope refers to the directive's scope. Any new properties attached to $scope
      will become available to use in the directive's template.
      
      element refers to the directive's HTML element.
      
      attrs contains the element's attributes.
    */
    link: function(scope, element, attrs) { 
      scope.buttonText = "Install", 
      scope.installed = false, 

      scope.download = function() { 
        element.toggleClass('btn-active'); 
        if(scope.installed) { 
          scope.buttonText = "Install"; 
          scope.installed = false; 
        } else { 
          scope.buttonText = "Uninstall"; 
          scope.installed = true; 
        } 
      } 
    }
  }; 
});