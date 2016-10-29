"use strict";

const express = require("express");
const app = express();
const PORT = 8000;

var routes = require("./routes/index");

app.set("view engine", "ejs");

app.use("/puppies", router.puppies);
app.use("/", router.statics);

app.listen(PORT, function(){
  console.log(`The server is fully operational on ${PORT}.`);
});
