"use strict";

var Puppy = function (name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
};

var puppiesArray = [];

module.exports = {
  Puppy,
  puppiesArray
};
