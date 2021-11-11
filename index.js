// javaScript display possibilities 

// 1- innerHTML
document.getElementById("first").innerHTML = 5+6;
// 2- document.write()
document.write(10+12);
// 3- window.alert()
// window.alert(22);
// 4- console.log()
console.log("hello world");

// JAVASCRIPT VARIABLES 

// variables are containers for storing data 
let a = 12;
let b = 13;
console.log(a+b);
// LET
// let keyword was introduced in ES6(2015)
// let has block scope
{
    let x =2;
    console.log(x);
}
// console.log(x);
// we can use var before it is declared
carName = "Ford";
var carName;
console.log(carName);
//CONST
//const variable cannot be reassigned
const arr = [1,2,4,5];
arr[0] = 12;
console.log(arr[0]);

// JAVASCRIPT OPERATORS
// Arithmetic Operator
// 1- assignment operator (=)
// 2- adding operator (+)
// 3- multiplication operator (*)
// 4- division operator (/)
// 5- modulus operator (%)
// 6- increment and decrement operator
// 7- exponentiation (x**2)

let x = 10;
let y = 20;
console.log(x+y);
console.log(y-x);
console.log(y/x);
console.log(x*y);
console.log(y%x);
console.log(x++);
console.log(++x);
console.log(x**2);

//Operator precedence
// multiplication and division have higher precedence the addition and subtraction
// using parentheses, the operations inside are evaluated first.

// DATA TYPES
// Primitive datatype 
// Boolean, Number, String, Bigint, Symbole

let space = "hello";
console.log(space)
//typeof Operator
let myName = "Aakash";
console.log(typeof(myName));
// undefined
let car;
console.log(car);

// JAVASCRIPT FUNCTION
// define the code once, and use it many times 
// function is executed when it is called
let xty = myNames("Aakash","Tyagi"); 
function myNames(name,sername){
    return name+sername;
}
console.log(xty);

// Template literals 
let firstNum = 10;
let secondNum = 20;
console.log(`the sum of above Num is ${firstNum+secondNum}`);

// Default Parameters
// allow named paramenter to be initialized with default values or undefined is passed
const multiplication = (_A,_B=2) => {
    return _A*_B;
}
console.log(multiplication(2));

// Arrow Function 
const sum = () => {
    let a = 5, b = 10;

    return `the sum of given value if ${a+b}`;

}
console.log(sum());




