"use strict";

var express = require("express");
var router = express.Router();

router.route("/about")
  .get (function(request, response){
    response.render("about.ejs");
  });

router.route("/contact")
  .get (function(request, response){
    response.render("contact.ejs");
  });

module.exports = router;
