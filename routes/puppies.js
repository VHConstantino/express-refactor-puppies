"use strict";

var express = require("express");
var router = express.Router();
var app = express();

var puppyJs = require("./models/puppies");
var puppiesArray = puppyJs.puppiesArray;
var Puppy = puppyJs.Puppy;

var counter = 1;


router.route("/")
  .get(function(request, response){
    response.send(puppiesArray);
  });


router.route("/new")
  .get(function (request, response) {
  response.render("new");
});


router.route("/new-puppy")
  .get(function (request, response){
    var newPuppy = new Puppy(request.query.name, request.query.age, counter);

    if(newPuppy){
      puppiesArray.push(newPuppy);
      counter ++;
    }

    response.send(puppiesArray);
  });


router.route("/:id")
  .get(function (request, response) {
    for (var i = 0; i < puppiesArray.length; i++) {
      if (puppiesArray[i].id === Number(request.params.id)) {
        response.send(puppiesArray[i]);
    }
  }
});

module.exports = router;
