let team = {
    name: "The Avengers",
    passed: true,
    age: 25,
}

team.name = "Royal Dagon";
console.log(team);

//Explicit Types
let userName: string;
userName = "John Doe";
// userName = true;

let num : number;
num = 42;
// num= "10";

let bool : boolean;
bool = true;
bool = false;
// bool = "1"; 

//array
let workers : string[];
// workers = ["aung",10,true]

let numArray: number[];
numArray = [1, 2, 3, 4, 5];

let boolArray: boolean[];
boolArray = [true, false, true];

//union types
let mixed: (boolean | string | number)[];
mixed = [true, "hello", 42, false, "world", 100];

//object union
let personOne : {
    name:string,
    age:number,
    passed:boolean,
}

personOne = {
    name: "Jane Doe",
    age: 30,
    passed: true,
}
