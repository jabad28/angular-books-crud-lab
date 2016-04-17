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

  vm.updateBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id,
    }).then(function bookUpdatesuccessCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response.data);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id,
    }).then(function bookDeletesuccessCallback(json) {
      var index = vm.books.indexOf(book);
      // vm.albums.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response.data);
    });
  };
}
