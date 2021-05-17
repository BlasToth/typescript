let hello: string = "foo";
hello = "World";
console.log("Hello TS " + hello);

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}
console.log(getFullName("Type", "Script"))
// types

var myString: string = "Hello world";
//myString = 22; //Type 'number' is not assignable to type 'string'.ts(2322)

// interfaces
interface UserInterFace {
    name: string;
    age?: number;
    getMessage(): string;
}
const user: UserInterFace = {
    name: "Pepito",
    age: 23,
    getMessage() {
        return "Hello " + user.name;
    }
}
const user2: UserInterFace = {
    name: "Grillo",
    getMessage() {
        return "Hello " + user2.name;
    }

};
console.log(user.getMessage())

// union operator
interface IUsuario {
    name: string,
    surname: string
}
let username: string = "Jon Snow";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let usuario: IUsuario | null = null;