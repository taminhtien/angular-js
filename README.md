# How does this app work?

1. In ```app.js```, we created a new module named MyApp. A module contains the different components of an AngularJS app.

2. Then, in ```index.html``` we added ```<body ng-app="myApp">```. The ```ng-app``` is called a directive. It tells AngularJS that the MyApp module will live within the ```<body>``` element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.

3. In ```MainController.js``` we created a new controller named ```MainController```. A controller manages the app's data. Here we use the property title to store a string, and attach it to ```$scope```.

4. Then, in ```index.html```, we added ```<div class="main" ng-controller="MainController">```. Like ```ng-app```, ```ng-controller``` is a directive that defines the controller scope. This means that properties attached to ```$scope``` in ```MainController``` become available to use within ```<div class="main">```.

5. Inside ```<div class="main">``` we accessed ```$scope.title``` using ```{{ title }}```. This is called an expression. Expressions are used to display values on the page.

6. The value of title showed up when we viewed the app in the browser.
