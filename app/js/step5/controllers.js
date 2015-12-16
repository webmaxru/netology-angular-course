'use strict';

bookApp.controller('BookDetailCtrl', function($scope) {

  $scope.book = {};
  $scope.addBook = function(book) {
    console.log(book);
    $scope.book = {};
  };

});
