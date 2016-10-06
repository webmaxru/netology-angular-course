'use strict';

bookApp.controller('BookListCtrl', function($http, Books) {
    var store = this;
    store.list = Books.query();;
    /*
    $http.get('data/books.json').success(function(data) {        
        store.list = data;
    });
    */

});
