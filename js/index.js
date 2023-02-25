
// // // var - function scoped, hoisted;
// // // let - block scoped
// let name = "Global scope";
// function displayName(){
//     console.log(name);
//     if(true){
//         let name = "block scope";
//         console.log(name);
//     }
//     console.log(name);
// };

// displayName();
// console.log('outside',name);



let stringVariable = "abcd";
const PI = 3.14;
const INTEREST_RATE = 7;


// PascalCase - classes
// camelCase - other variables
// SNAKE_CASE const declarations
// kebab-case used for CSS

// strings
// numbers
// // NaN
// undefined
// // null
// // boolean
// // arrays
// // objects

// // functions

// console.log(stringVariable.includes("ab")) 
// console.log(stringVariable.indexOf("c"));
// // stringVariable.toUpperCase();
// stringVariable = stringVariable.toUpperCase()
// console.log(stringVariable);
// // below methods do not modify the original string, 
// // console.log(stringVariable.toLowerCase());
// // console.log(stringVariable.toUpperCase());

// const someVar = stringVariable+PI
// console.log(someVar);

// // template literals

// let firstName  = 'Nikhil';

// // let str = "Hello, My name is "+ firstName + " Welcome to GFG";
// let str = `Hello, My name is  ${firstName}  Welcome to GFG`
// console.log(str)

// // Numbers

// let num = 1234.987654;
// let amount = 100_000_000;

// console.log(num.toFixed(2));
// console.log(amount.toLocaleString("en-in"));


let numStr = [...'1234'];
// ['1','2','3','4']
numStr[2] = '5';
// ['1','2','5','4']

console.log(numStr.join(''))


// console.log(numStr);
// let number = parseInt(numStr);
// console.log(number);


// let currentBalance = 100;
// let amount = +'200.123';
// console.log({amount});

// currentBalance += amount;
// console.log({currentBalance});

// // console.log(parseInt('abcd'));
// // console.log(parseInt('0xc23',16));
// console.log(parseInt('abcd'));


// boolean - true/false;
// Truthy/ Non - Truthy

/**
 * Non-Truthy
 * 0
 * Empty string "", '',``
 * null, undefined
 * NaN
 */

/**
 * Truthy
 * empty array  []
 * empty object {}
 */
// 


if ([]) {
    console.log("truthy");
}
else {
    console.log("falsy")
}


// null, undefined

let loggedInUser = { username: "Nikhil" };

loggedInUser = null;

let err = 'login err';
err = null;

// ==, ===
// strict equality, check the value + data type

1 == '1' //true
1 === '1' //false

0 == false //true
0 === false //false
null == undefined //true

function sumFn(num1, num2) {
    // this own scope
    return num1 + num2;
}

// const sumArrowFn = (num1,num2)=>{
//     // this -> parent scope
//     return num1+num2
// }
// only if we want to return from the function directly
const sumArrowFn = (num1, num2) => num1 + num2;

console.log(sumArrowFn(1, 2, 3, 4, 4, 5))

// for single argument, we can even skip () prenthesis
const fn = name => `Hello ${name}`;

console.log(fn("Nikhil"))


// arrays 

const array = [1, "string", true, [1, 2, 3], fn]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// console.log(arr.find(2)); //expects a function
// console.log(arr.includes(100))
const n = arr.length // 5
arr[arr.length - 1]

// return nth element from last 
arr.at(-n);

// works similar to arr[index]
// arr.at(index);

// function as a parameter, callback

// to get a new array applying a function on every element
const squareNums = arr.map(value => value * value);

arr.forEach((value, index) => {
    console.log('value is', value);
})

// filter
// 1 1%2 => 1, 2 2%2=> 0 , 3 3%2 => 1
// [1,3]
// const even = arr.filter(value=>!(value%2))
const even = arr.filter(value => value % 2 === 0);
console.log(even);

// const evenSquare = even.map(value=>value*value);
const evenSquare = arr.filter(value => !(value % 2)).map(value => value * value);
console.log({ evenSquare });



const sumOfNumbers = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue, accumulator + currentValue);
    accumulator += currentValue;
    return accumulator;
}, 0);

console.log({ sumOfNumbers });


// chaining
// sum of all even square of number
// const evenSquareSum = evenSquare.reduce((sum,val)=>sum+val);
// const evenSquareSum = arr.filter(val=>!(val%2)).map(val=>val*val).reduce((sum,val)=>sum+val);
const evenSquareSum = arr.filter(val => !(val % 2)).map(val => val * val).reduce((sum, val) => sum + val);
console.log({ evenSquareSum });
console.clear();
const arr2 = [...arr];
// arr2 is copy of all values of arr
arr2[0] = 999;
console.log({ arr }, { arr2 });

const nestedArray = [[0, 1], [2, 3], [4, 5]];
const copyNestedArray = [...nestedArray];

// copyNestedArray[0][0] = 999;
copyNestedArray[0] = ["a", "b"];
console.log(nestedArray);
console.log(copyNestedArray);


// objects


const employee = {
    name: "abc",
    designation: "Engg",
    dept: {
        name: "Core",
        intro: () => {
            console.log(this)
            return `Hi ${this.name}`
        }
    },
    intro: () => {
        console.log(this)
        return `Hi ${this.name}`
    },
    giveIntro() {
        const fn = () => {
            console.log('arrow fn', this);
        }
        console.log("outside fn", this);
        fn();
        return `Hi ${this.name}`
    }
}

employee.designation;
employee['designation'];
employee.dept.intro();

const empolyee2 = { ...employee, name: "emp2Name" };
const empolyeeDeepCopy = { ...employee, dept: { ...employee.dept } };
console.clear();
empolyeeDeepCopy.dept.name = "xyz";
empolyee2.dept.name = "xyz";
console.log(employee);
console.log(empolyeeDeepCopy);
console.log(Object.keys(employee));
console.log(Object.values(employee));
// combination of key and values
console.log(Object.entries(employee));
// console.log(employee.giveIntro());

class Employee {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept
    }
    intro() {
        console.log(`hello I'm ${this.name} working in dept ${this.dept}`);
    }
}

const emp1 = new Employee("abc", "abc")
const emp2 = new Employee("xyz", "xyz")
emp1.name


emp1.intro();

class Manager extends Employee {
    constructor(name, dept, team) {
        super(name, dept);
        this.team = team
    }
}


const mgr = new Manager("manager 1", "abc", [emp1, emp2]);
console.log(mgr);

// Array, Object destructuring
const newArr = [1, 2, 3, 4, 5];
const [first, second] = newArr;    // 1 2


const emp3 = {
    name: "abc",
    id:123,
    dept: {
        deptName: "Engg",
        deptId: 101
    }
};


// const name = emp3.name
// const { name, id } = emp3;


console.clear();
// renaming variables
// const firstName = emp3.name
// const { name:firstName, id:empID } = emp3;

// console.log({firstName},{empID});     // abc


// nested Destructuring
// const name = emp3.name;
// const deptName = emp3.dept.deptName

const {name, dept:{deptName,deptId}} = emp3;

const {dept} = emp3;
dept.deptId = 999;
console.log(emp3);


// console.log(name,deptName,deptId);