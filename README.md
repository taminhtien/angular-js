# Angular Notes

## First-review example

1. In ```app.js```, we created a new module named MyApp. A module contains the different components of an AngularJS app.
2. Then, in ```index.html``` we added ```<body ng-app="myApp">```. The ```ng-app``` is called a directive. It tells AngularJS that the MyApp module will live within the ```<body>``` element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.
3. In ```MainController.js``` we created a new controller named ```MainController```. A controller manages the app's data. Here we use the property title to store a string, and attach it to ```$scope```.
4. Then, in ```index.html```, we added ```<div class="main" ng-controller="MainController">```. Like ```ng-app```, ```ng-controller``` is a directive that defines the controller scope. This means that properties attached to ```$scope``` in ```MainController``` become available to use within ```<div class="main">```.
5. Inside ```<div class="main">``` we accessed ```$scope.title``` using ```{{ title }}```. This is called an expression. Expressions are used to display values on the page.
6. The value of title showed up when we viewed the app in the browser.

## Workflow

1. Create a module, and use ```ng-app``` in the view to define the application scope.
2. Create a controller, and use ```ng-controller``` in the view to define the controller scope.
3. Add data to ```$scope``` in the controller so they can be displayed with expressions in the view.

## Filter

1. AngularJS gets the value of ```product.price```.
2. It sends this number into the ```currency``` filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.
3. The filter outputs a formatted currency with the dollar sign and the correct decimal places.

## A quick review

- A __module__ contains the different components of an AngularJS app
- A __controller__ manages the app's data
- An __expression__ displays values on the page
- A __filter__ formats the value of an expression

## What is directive?

Directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).

## ng-click

1. The ```ng-click``` is a directive. When ```<p class="likes">``` is clicked, ```ng-click``` tells AngularJS to run the ```plusOne()``` function in the controller.
2. The ```plusOne()``` function gets the index of the product that was clicked, and then adds one to that product's ```likes``` property.
3. Notice that the ```plusOne()``` doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.

## Review

1. A user visits the AngularJS app.
2. The view presents the app's data through the use of expressions, filters, and directives. Directives bind new behavior HTML elements.
3. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
4. The function in the controller updates the state of the data.
5. The view automatically changes and displays the updated data. The page doesn't need to reload at any point.

## Why is creating your own directives useful?

1. **Readability.** Directives let you write expressive HTML. Looking at index.html you can understand the app's behavior just by reading the HTML.
2. **Reusability.** Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.

## Why are services useful?

Why are services useful? Instead of filling the controller with code to fetch weather data from a server, it's better to move this independent logic into a service so that it can be reused by other parts of the app.

What can we generalize so far?

- Directives are a way to make standalone UI components, like ```<app-info>```
- Services are a way to make standalone communication logic, like ```forecast``` which fetches weather data from a server

## Why are routes useful?

Why are routes useful? Instead of filling a single view with more code than needed, routes let us map URLs to self-contained controllers and templates. Furthermore, now that the app has URLs, users can easily bookmark and share the app's pages.

What can we generalize so far?

- Directives are a way to make standalone UI components, like ```<app-info>```
- Services are a way to make standalone communication logic, like forecast which fetches weather data from a server
- Routes are a way to manage apps containing more views.