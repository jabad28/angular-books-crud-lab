angular
       .module('libraryApp', ['ngRoute'])
       .config(config)
       .controller('BooksShowController', BooksShowController);

////////////
// ROUTES //
////////////



config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: "/templates/books/index.html",
      controller:  "BooksIndexController",
      controllerAs: "BooksShowCtrl"
    })
    .when('/books/:id', {
      templateUrl: "/templates/books/show.html",
      controller:  "BooksShowController",
      controllerAs: "BooksShowCtrl"
    })
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
