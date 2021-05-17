let hello: string = "foo";
hello = "World";
console.log("Hello TS " + hello);

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}
console.log(getFullName("Type", "Script"))

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
    name: string;
    surname: string;
}
let username: string = "Jon Snow";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let usuario: IUsuario | null = null;

// type alias
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface CarInterface {
    id: ID;
    name: string;
    year: number;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonTag: MaybePopularTag = "dragon";

// --types--
// void
const doSomething = (): void => { //void type is a set of undefined and null
    console.log("doSomething"); // void is used when we do not return anything in a function
}
// any - turns off TS checks (so not really recommended)
let pepi: any = "foo";
// console.log(pepi.bar());
// never
// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown; -- Error

// classes can be public (default), private, protected, readonly
class Person {
    private firstName: string;
    private lastName: string;
    readonly unchangeableName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const person = new Person("Jon", "Nieve");
//console.log(person.firstName) - it is private
console.log(person.getFullName())