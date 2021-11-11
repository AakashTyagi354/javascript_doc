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

// ARRAYS
// array is a special variable, which can hold more than one value 
// creating an array
// Array index start from 0
// arrays are objects 
const myFriends = ["Aakash","Hardik","Aryan","Tyagi"];
console.log(typeof(myFriends));
// or
const carTwo = new Array("saab","volvo","BMW");

// we can sort the array by method of Array.sort()
const my_Number = [3,4,1,2];
console.log(my_Number.sort());

//length of an array
console.log(my_Number.length);

// looping the array element
// using for loop
for(let i = 0;i<my_Number.length;i++){
    console.log(my_Number[i]);
}
// using for in loop {return only index of element}
for(let elements in my_Number){
    console.log(elements);
}
// using for of loop {return the value not the index}
for(let element of my_Number){
    console.log(element);
}
//for each loop
my_Number.forEach(function(element,index,array){
         console.log(element);
});

// Adding array element 
// push()
const fruits = ["banana","orange","apple"];
fruits.push("lemon");
for(let element of fruits){
    console.log(element);
}

// Array Methods 
// pop() {popping the item out of an array }
fruits.pop();
for(let element of fruits){
    console.log(element);
}
// shift() is same as pop() the difference is it removes first element of an array 
fruits.shift();
for(let element of fruits){
    console.log(element);
}

// unshift() add an element at the beginning 
fruits.unshift("mango");

// Splicing an array {used to add new item in an array }
fruits.splice(1,0,"lem");
for(let element of fruits){
    console.log(element);
}
// we can also use splicing for removing elements from array
fruits.splice(0,1);
for(let element of fruits){
    console.log(element);
}
// concatenating arrays 
const myFri_1 = ["he","she"];
const myFri_2 = ["they","them"];
console.log(myFri_1.concat(myFri_2));

// reversing an array 
// reverse()
const my_Number_2 = [1,23,34,56];
my_Number_2.reverse();
for(let element of my_Number_2){
    console.log(element);
}

// array.map()
// the map() method create a new array by performing a function on each array element 

const number_1 = [1,2,3,4];
const number_2 = number_1.map(myFun);
function myFun(value){
    return value*2;
}

// array filter();
// This method creates a new array with the array element which passes a test.

const number_3 = [9,8,7,6,5,4];
const over5 = number_3.filter(myFunction);
function myFunction(value){
    return value>5;
}







