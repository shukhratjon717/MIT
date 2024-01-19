// Scopes and Contexts 

// Today's agenda
// 1) Basics of Scope
// 2) Basics of Context
// Scope: In JavaScript, objects and functions are also variables.
// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// function calculate(a,b) {
//     const c = a + b
//     console.log('c value', c);
// }

// calculate(14,15)
// console.log(c);

// To make c variable work outside of scope, we have to bring c vaiable outside of function. In this case we use "let" as creator o a variable.


// Priority: 1) searches inside of function. 2) searches from parameter. 3) outside of functoin
let c = 0
function calculate(a,b) {
     c = a + b
    console.log('c value', c);
}

calculate(14,15)
console.log(c);


// CONTEXT: Context is always the value of the "this" keyword which is a reference to the object that “owns” the currently executing code or the function where it's looked at. 
// We know that window is a global object in the browser so if we type this in the console and it should return window object, which it does.

const user = {
    name: 'Haru',
    age: 30,
    nationality: 'Korean',
    greet() {
        console.log("Hi, How do you do");
    },
    introduce() {
        console.log(`I am ${this.name} and i am ${this.age}`);
        const sayYourAge = () => {
            console.log(`i am ${this.age} years old`);
        }
        sayYourAge()
    }
}

user.greet();
user.introduce();

function greetings() {
    console.log(`i am ${this.name}`);
    console.log(this.name);
}

greetings();