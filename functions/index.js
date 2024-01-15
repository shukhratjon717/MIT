// MIT 11   started 12.01.2024
// To start, we need 3 envoriments for staring point. 
// 1st JS working on browseer enviroment. Our JS is gonna work on the console of the browser.
// ACCESS -> right sidde of the touchpad -> inspect -> console !

// const title = document.title = "MERN"  // ---> to change the title of the browser

// document.body.style.backgroundColor = "blue" // --> to change the background of the webpage.

// 2nd enviroment is REACTJS. It is a free nd open-source front-end Javasscript library for building userinterfaces based on components. 
// it is maintained (formerly Facebook) and aa community of individual developers and companies.
//3rd enviroment is NODEJS. it is a open-source, cross platform runtime enviroment for executing JavaScript code.
// NodeJS is user extensively for server-side programming, make it possible for developers to use JS for cient-side and 
// server-side code without needing to learn additional language. We need https://codepen.io/ for this.


// FUNCTION and VARIABLES

// A function -a procedure a set of statements that preform a task or calculats a value, but for a procedureto qualify as a function, 
// it should take some inputs and return an output where there is some obvius relationship between input and output. it has 3 structures:
 // 1st: simple, 2nd: anonymous, 3rd: arrow.

//  1st simple 

function greet() {
    console.log('salom - oddiy');
}

// 2nd anonymous 

const b1 = function() {
    console.log('salom - anonymous');
}

// 3rd arrow function

const arrow = () => {
    console.log('salom - arrow');
}

greet();
b();
arrow()

// Returning value in JS. it has 2 types which are void and return

// Void function
 // The void keyword in JS is used to evalute an expression which does not return any value.
 // The void operatoris an unary operator that accepts the single operand, which may be of any type.

 function hisoblash_1() {
    let a = 7;
    let b = 8;
    const c = a + b;
    console.log("c qiymat",+ c +"ga teng");
 }
 hisoblash_1()

 // return function

 // The return statement ends function execution and specifies a value to be returned to the function caller
 function hisoblash_2(x,y) {
    return x + y;
 
 }

 const c = hisoblash_2(8,9)

 console.log(c);

 // // MIT 11   started 12.01.2024
// // To start, we need 3 envoriments for staring point. 
// // 1st JS working on browseer enviroment. Our JS is gonna work on the console of the browser.
// // ACCESS -> right sidde of the touchpad -> inspect -> console !

// // const title = document.title = "MERN"  // ---> to change the title of the browser

// // document.body.style.backgroundColor = "blue" // --> to change the background of the webpage.

// // 2nd enviroment is REACTJS. It is a free nd open-source front-end Javasscript library for building userinterfaces based on components. 
// // it is maintained (formerly Facebook) and aa community of individual developers and companies.
// //3rd enviroment is NODEJS. it is a open-source, cross platform runtime enviroment for executing JavaScript code.
// // NodeJS is user extensively for server-side programming, make it possible for developers to use JS for cient-side and 
// // server-side code without needing to learn additional language. We need https://codepen.io/ for this.


// // FUNCTION and VARIABLES

// // A function -a procedure a set of statements that preform a task or calculats a value, but for a procedureto qualify as a function, 
// // it should take some inputs and return an output where there is some obvius relationship between input and output. it has 3 structures:
//  // 1st: simple, 2nd: anonymous, 3rd: arrow.

// //  1st simple 

// function greet() {
//     console.log('salom - oddiy');
// }

// // 2nd anonymous 

// const b = function() {
//     console.log('salom - anonymous');
// }

// // 3rd arrow function

// const arrow = () => {
//     console.log('salom - arrow');
// }

// greet();
// b();
// arrow()

// // Returning value in JS. it has 2 types which are void and return

// // Void function
//  // The void keyword in JS is used to evalute an expression which does not return any value.
//  // The void operatoris an unary operator that accepts the single operand, which may be of any type.

//  function hisoblash_1() {
//     let a = 7;
//     let b = 8;
//     const c = a + b;
//     console.log("c qiymat",+ c +"ga teng");
//  }
//  hisoblash_1()

//  // return function

//  // The return statement ends function execution and specifies a value to be returned to the function caller
//  function hisoblash_2(x,y) {
//     return x + y;
 
//  }

//  const c = hisoblash_2(8,9)

//  console.log(c);

// Variables
let a = 15;
console.log("a:",a);
a = 20;
console.log("a:",a)
// Updating the alue when it is assign to let variable is possible.
const b = 20;
console.log('b:', b);
// Updating the value when it is assign to const variable is not possible

// Function

function greet() {
  console.log("Hello World")
};
greet(); // call

// Function criteria: Structutre & Returning & Execution
// Structutre: Regular, Expression (Anonymous), Arrow, Avto Ivoke functions.

function greetings1() {
  console.log("Hello World from regular")
}
greetings1()

// Expression (Anonymous) function
const abc = function() {
  console.log("Hello World from anonymous")
}
abc();
// Arrow function
const xyz = ()=> {
  console.log("Hello World from Arrow function")
}
xyz();

// Avto Invoke function\
(function() {
  console.log("Hello World from Invoke")
})() // Avto execution happens here.
