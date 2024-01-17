// Class and its agenda

// 1) Namig standarts
// 2) What is class?
// 3) Organisational Structre of class
// 4) static method and static properties (state)


// Naming standards:
// Naming standars has 4 properties 
// Camel case, Snake case, Kebabcase, Pascal case,

// Camel case: camelCase is a variable naming convention where the first word is always in lowercase and every other word starts with a capital letter.
// The words are also not separated by spaces, dashes, or underscores

const yourName1 = 'Steve';

function isPerson1() {
    return true;
};

// Snake case: Snake case (stylized as snake_case) is the naming convention in which each space is replaced with an underscore (_) character, and words are written in lowercase. 
// It is a commonly used naming convention in computing, for example for variable and subroutine names, and for filenames.

const your_name_2 = "Ali";
function is_person_2 () {
    return true;
};

// Kebab case: kebab-case is a variable naming convention where each word is in lower case, and separated by dashes. It is also known as dash-case, list-case, or spinal-case. 
// Examples: first-name, transactions-made, kebabs-eaten-today.
// your-name

// Pascal case: PascalCase is a variable naming convention where the first letter in every word is capitalized and the rest is in lowercase. 
// There are also no gaps between each word. It is also known as UpperCamelCase or StudlyCase. Examples: FirstName, TotalBalance, WigsWorn

const YourName = "Jack";
function IsPerson4() {
    return true
}


// What is class:Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. For more examples and explanations, see the Using classes guide.
// Classes create objects through the new operator. Each object has some properties (data or method) added by the class. 
// The class stores some properties (data or method) itself, which are usually used to interact with instances.

const person1 = {
    name: "Jack",
    age: 19,
};
const person2 = {
    name: "John",
    age: 19,
};
const person3 = {
    name: "Jimmy",
    age: 19,
}

// Organizational structure of classes

 // Making a class requires pascal naming standards
  // accoding to organizationa sstructure, classes are divided into 3 parts
 
 class Person {
    // State
    name = "";
    age = 0;

    // Constructor
    constructor(personName, personAge) {
        this.name = personName
        this.age = personAge;
    }
    // Method

    introduce() {
        console.log(`My name ${this.name} and i am ${this.age} years old`);
    }

    greet() {
        console.log("Hi, How do you do");
    }
}

const person5 = new Person('Steve', 23)
const person6 = new Person('Oliver', 25)
const person7 = new Person('Alex', 21)

person5.greet();
person5.introduce();

console.log("===========");
person6.greet();
person6.introduce();

// Static method and Static property

// Static method : A static method in JavaScript is a method that has a static keyword prepended to itself.
// Such methods cannot be accessed through instantiated objects but could be accessed through the class name. 
// This is because static methods belong to the class directly.

class User { 
    // State
    name = "";
    age = 0;
    static serialNumber = 80;

    // Constructor
    constructor(personName, personAge) {
        this.name = personName
        this.age = personAge;
    }
    // Method

    introduce() {
        console.log(`My name ${this.name} and i am ${this.age} years old`);
    }

    greet() {
        console.log("Hi, How do you do");
    }
    static help() {
        console.log("Hi, How can i help you");
    }
}
// To call a static method, we directly approach the object itself not the property

User.help()
const userNum = User.serialNumber;
console.log(userNum);
