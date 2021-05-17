var hello = "foo";
hello = "World";
console.log("Hello TS " + hello);
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Type", "Script"));
// types
var myString = "Hello world";
var user = {
    name: "Pepito",
    age: 23,
    getMessage: function () {
        return "Hello " + user.name;
    }
};
var user2 = {
    name: "Grillo",
    getMessage: function () {
        return "Hello " + user2.name;
    }
};
console.log(user.getMessage());
var username = "Jon Snow";
var pageName = "1";
var errorMessage = null;
var usuario = null;
var popularTags = ["dragon", "coffee"];
var dragonTag = "dragon";
