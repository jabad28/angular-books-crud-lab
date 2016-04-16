angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(BooksIndexSuccess, BooksIndexError);

  function BooksIndexSuccess(response){
    console.log('books response data', response.data);
    vm.books=response.data.books;
  }
  function BooksIndexError(error){
    console.log('books error', error);
  }
}
