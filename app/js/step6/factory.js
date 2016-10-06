'use strict';

bookApp.factory("Books", function($resource){
    console.log("Factory works");
    return $resource("data/books.json", {}, {
        query: {method: "get", isArray: true}
    });
});




