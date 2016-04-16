angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(BookShowSucess, BookShowError);

  function BookShowSucess(response){
    console.log('book show data', bookId, response.data);
    vm.book = response.data;
  }
  function BookShowError(error){
    console.log('book show error', error);
  }
}
