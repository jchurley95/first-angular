# first-angular-app

![codeangular](https://user-images.githubusercontent.com/28677283/31116688-0efffd90-a7f5-11e7-8cb3-52d5e65807d9.png)

### Notes from going along with codeacademy’s Learn Angular course

	Creating modules
	⁃	a module contains the components that make up the app
	⁃	example: 
	⁃	var app = angular.module("myApp", []);
	
	ng-app, ng- angular directives
	⁃	ng tags are angular “directives”
	⁃	extending HTML attributes with the prefix ng-
	⁃	binds the value of HTML controls (input, select, textarea) to app data
	⁃	“directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array)
	⁃	example:
	⁃	in index.html, add ng-app=“myApp” to the body tag
	⁃	this will tell angular that the myApp module will live within the body element,
	⁃	termed  the app’s “scope” which will be referred to in the controller built next
	⁃	“we use the ng-app directive to define the application scope” - code academy
	
	Angular controllers
	⁃	manage the app’s data
	⁃	example:
	⁃	created file MainController.js
	⁃	app.controller('MainController', ['$scope', function($scope) {$scope.title = 'Top Sellers in Books'; }])
	⁃	used the property title to store a string and attach it to $scope
	⁃	title value is then rendered in index.html in the next step
	
	ng-controller
	⁃	directive that defines the controller scope
	⁃	example:
	⁃	<div class=“main” ng-controller=“MainController”>
	⁃	properties attached to $scope in MainController become available to use within <div class=“main”>
	
	expressions
	⁃	used to display values on the page
	⁃	like handlebars, {{ variableName }}
	⁃	like JavaScript expressions, AngularJS expressions can contain
	⁃	literals
	⁃	operators
	⁃	variables
	⁃	unlike js, angular expressions do not support
	⁃	conditionals
	⁃	loops
	⁃	exceptions
	⁃	angular expressions support filters, js do not
	⁃	example:
	⁃	inside the div with class main access $scope.title using {{ title }}
	⁃	displays the value of title (from MainController.js) in the UI (in index.html)
	
	filters
	⁃	Can pass values from a controller through a ‘filter’ to change their display formatting
	⁃	helps separate the content in the controller from its presentation in the view
	⁃	pipe symbol “|” takes output on the left and “pipes” it to the right
	⁃	date, currency, uppercase, etc.
	⁃	example:
	⁃	in MainController
	⁃	$scope.product = { name: ‘The Book of Trees”, price: 19 }}
	⁃	in index.html
	⁃	{{ product.price | currency }}
	⁃	displays price as $19.00
	⁃	this is neat, because it allows for less concern about final display formatting when working with data
	⁃	meanwhile, working with React, I had to import npm package moment.js to get dates formatted correctly
	
	ng-repeat, mapping through an array in angular
	⁃	ng-repeat shows var in vars, generates HTML for each var
	⁃	example: 
	⁃	ng-repeat=“product in products”
	⁃	displays selected data for each product in the $scope.products array in MainController.js ($scope.product from before was changed to an array of products)
	
	ng-src, img ng-src replaces img src
	⁃	example: 
	⁃	<img ng-src=“{{ product.cover }}”>
	⁃	sets src of image to property within the controller
	
	ng-click, adding on click functionality to elements
	⁃	ng-click is a directive that allows users to interact with HTML elements
	⁃	example:
	⁃	added a function to the scope in controller which adds 1 like to product at specific index when called 
	⁃	in index.html, added ng-click=“plusOne($index)”
	⁃	now, when user clicks on the display for number of likes, adds one to that value
	
	MVC with AngularJS
	⁃	User visits the app
	⁃	View presents app’s data through expressions {{}}, filters |, and directives ng-
	⁃	directives bind new behavior HTML elements
	⁃	User clicks an element in the view
	⁃	if element has a directive (ng-click functionality), angularjs runs the function
	⁃	function in the Controller updates the state of the data
	⁃	view automatically changes and displays the updated data
	⁃	page doesn’t need to reload at any point
	
	creating directives
	⁃	Readability and Reusability
	⁃	Lets you write expressive HTML, lets you create self-contained units of functionality
	⁃	Best practices - DRY - “We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML”
	⁃	made a separate directory under js directory called directives
	⁃	made appInfo.js and appInfo.html
	⁃	set appInfo.html as the template for appInfo.js
	⁃	appInfo.html calls on data for each product within the controller using expressions
	⁃	imported appInfo.js into index.html as a script tag
	⁃	and finally was able to go back to index.html and create an app-info tag
	⁃	set its info to the data of the first product
	⁃	and it displayed just as before but much DRYer
	⁃	repeated process for each product (I assume later will be using ng-repeat to display all)
	⁃	UPDATE
	⁃	using ng-repeat
	⁃	example: 
	⁃	put the products in controller in an array
	⁃	in index.html, <div class="card" ng-repeat="app in apps">
	⁃	          		<app-info info="app"></app-info>
	⁃	       	 	</div>
	⁃	Adding a link option to directives creates an interactive directive that responds to user actions by adding a function
	⁃	Link function takes in three inputs
	⁃	scope
	⁃	element
	⁃	attrs
	⁃	template associated with this file will be a button with an ng-click functionality for the specified function that can call on data from the directive file just as from a controller. 
	⁃	example:
	⁃	link: function(scope, element, attrs) { 
	⁃	      		scope.buttonText = "Install", 
	⁃	     		 scope.installed = false, 
	⁃	
	⁃	     		 scope.download = function() { 
	⁃	        		element.toggleClass('btn-active'); 
	⁃	        if(scope.installed) { 
	⁃	          scope.buttonText = "Install"; 
	⁃	          scope.installed = false; 
	⁃	        } else { 
	⁃	          scope.buttonText = "Uninstall"; 
	⁃	          scope.installed = true; 
	⁃	        } 
	⁃	      } 
	⁃	    }
	⁃	and in the html template
	⁃	<button class="btn btn-active" ng-click="download()"> 
	⁃	  		{{ buttonText }} 
	⁃	</button>
	
	AngularJS vs jQuery
	⁃	jQuery adds interactivity as an extra layer on top of HTML, while Angular treats interactivity as a native component of HTML
	⁃	Angular is able to create native html tags, directives, as opposed to just altering aspects of existing types of HTML elements using jQuery
	
	Services
	⁃	a way to make standalone communication logic
	⁃	read live data from a server
	⁃	using app.factory, create service
	⁃	use angular’s built in $http to fetch JSON from the server
	⁃	[‘$http’, function($http) {
	⁃	}]
	⁃	now $http is available to use inside the service
	⁃	use $http to construct an HTTP GET request for the data
	⁃	if request succeeds, the data is returned
	⁃	otherwise, error info is returned
	⁃	similar to making an axios call in React
	⁃	next, in the controller, use the service to fetch data from the server
	⁃	add service to MainController as a dependency so that it is available for use, 
	⁃	within the controller use the service to async fetch the data from the server and store it in a variable $scope.arbitraryName
	⁃	Now, the data can be grabbed in index.html  from controller using an expression just as before
	⁃	example: 
	⁃	app.factory('forecast', ['$http', function($http) { 
	⁃	  		return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
	⁃	            .		success(function(data) { 
	⁃	              		return data; 
	⁃	           		 }) 
	⁃	            		.error(function(err) { 
	⁃	             		 return err; 
	⁃	            		}); 
	⁃	}]);
	
	Routing
	⁃	application routes
	⁃	in app.js inside app.config() method use $routeProvider
	⁃	defines application routes
	⁃	.when() maps URL to the specified controller and template .html page
	⁃	the controller uses the specified service to fetch data from server and stores it in a $scope array
	⁃	the .html page uses ng-repeat to loop through each item and display data in the view
	⁃	.otherwise() specifies a redirect if user accidentally visits a URL other than the specified URL
	⁃	now, when a user visits specified url, view injects that .html file into the div given the ng-view directive in index.html
	⁃	$routeParams.id will grab the :id from the URL
	⁃	inject $routeParams and service to related controller
	⁃	
	⁃	example:
	⁃	app.config(function ($routeProvider) {
	⁃	$routeProvider
	⁃	.when(‘/‘, {
	⁃	controller: ‘HomeController’,
	⁃	templateUrl: ‘views/home.html’,
	⁃	})
	⁃	.when('/photos/:id', {
	⁃ controller: 'PhotoController',
	⁃	    templateUrl: 'views/photo.html'
	⁃	  })
	⁃	.otherwise({
	⁃	redirectTo: ‘/‘
	⁃	});
	⁃	});
	⁃	app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
	⁃	photos.success(function(data) {
	⁃	    $scope.detail = data[$routeParams.id];
	⁃	  	});
	⁃	}]);
