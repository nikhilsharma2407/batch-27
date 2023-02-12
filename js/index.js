
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



let stringVariable  = "abcd";
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