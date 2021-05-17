var hello = "foo";
hello = "World";
console.log("Hello TS " + hello);
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Type", "Script"));
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
// --types--
// void
var doSomething = function () {
    console.log("doSomething"); // void is used when we do not return anything in a function
};
// any - turns off TS checks (so not really recommended)
var pepi = "foo";
console.log(pepi.bar());
// never
// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
// unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2: string = vUnknown; -- Error
