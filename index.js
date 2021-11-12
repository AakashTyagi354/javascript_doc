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

// Array.every() method 
// it check if all array values pass a text 

// Array.indexOf() 
// search an array for an element value and returns its postion 

// Array.lastIndexOf() returns the last occurence of the searched element 

// Array.includes()
// checks if an element is present in an array or not 

// Array.find()
// returns the value of first array element that passes a test 




// STRING 
// used for storing and manipulating text

let text = "Aakash Tyagi"
console.log(text);
// we can use double or single quotes
// String length
console.log(text.length); // also counts the space in between 
// Escape character
let text_2 = 'we are going to "play" games ';
console.log(text_2);
// String as a Objects 
let yt = new String("John");
console.log(yt);

// String Method 
// 1- slice(start, end)
let str = "hello world";
let part = str.slice(0,5); // we the value is -ve then postion is counted from the end of the string 
console.log(part); 
// 2- substring()
// can not accept negative indexes 
let part_2 = str.substring(0,5);
console.log(part_2);
// 3- substr()
// the second parameter specifics the length of the extracted part 
let part_3 = str.substr(0,5);
console.log(part_3);
// 4- replace()
let part_4 = str.replace("hello","world");
console.log(part_4); // replace only the first match 
// 5- toUpperCase
// 6- toLowerCase
// 7- concat()
// 8 - String.trim()
// removes the white space from both the sides 
console.log(str.trim());

// Extracting String Character
// 1- charAt(posiion)
console.log(str.charAt(0));
// 2- charCodeAt()
// return UTF-16 code of a character.
console.log(str.charCodeAt(0));

// converting string to an array
// split method
console.log(str.split(" "));

// String Search
// 1- indexOf()  returns the index of first occurrence 
console.log(str.indexOf("world"));
// 2- lastIndexOf()
// returns the index of last occurrence 
console.log(str.lastIndexOf("world"));
// 3- search() method
console.log(str.search("hello"));
// 4- includes() method
// returns true if string containes the specified value
console.log(str.includes("hello"));
// 5- startsWith()
// returns true if a string begins with a specified value 
console.log(str.startsWith("h"));
// 6- endsWith()
// returns true if a string ends with a specified value 
console.log(str.endsWith("d"));








// DATE 
// JavaScript will use the browser's time zone and display a date as a full text string 
// Creating a date objects 

// 1- new Date()
// create a new date object with the current date and time 
 const d = new Date();
 console.log(d.toString());

 // 2- new Date(year, month,....)
 // create a date with specified date and time 
 const d_1 = new Date(2018,11,24,10,33,30,0);
 console.log(d_1.toString()); // jan-0 and Dec-11

 // 3- new Date(dateString)
 // creating a new date object from a date string 
 const d_2 = new Date("October 12,2014 11:13:00");
 console.log(d_2);

 // 4- new Date(millisecond)
 // creates a new date object as milliseconds
 d.getTime();
 console.log(d);
d.getFullYear();
console.log(d);








