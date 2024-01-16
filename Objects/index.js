// Objectlar
// 1) Dasturlashda paradigma tushinchasi.
// 2) Objectlarni Literal usulda qurish.
// 3) Objectlarni Muhimlilik darajasi.
// 4) primitive va Object variablelar tahlili.
// 5) Objectlarda reference tushinchasi.
// 6) Objectlarni Constructor usulida hosil qilish.

// Programming Paradigms: Functional programming va OOP (Object Oriented Programming).
// OOP -> Big concepts: Abstruction, Encapsulation, Inheritence and Polymorfism.
// Functional Progranning is a programm of building computer programm using expressions and functions without mutating state and data.

// OOP is about modeling a system as a collection of objects, where each object represents some particular aspec of the system. It contains function nd data.

// Objectlarni literal usulda qurish

const person = {
    name: 'Steve',
    age: 24,
    nationality: "Australian"
  }
  // Keys: name, age, nationality
  // Values: "Steve", 24, "Australian"
  // The parts between curly braces is called property.
  const access = person.name
  console.log("access:", access)
  // we can use functions inside objects, they are called methods
  
  const person2 = {
    name: "Ali",
    age: 23,
    nationality: "Austalian",
    greet() {
      console.log("Hi, How are you")
    },
    introduce() {
      console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
  }
  
  person2.greet();
  person2.introduce();
  
  const pressButton = document.getElementById("butt")
  console.log("pressButton:", pressButton)
  pressButton.addEventListener('click', function(){
    alert("You pressed the button")
  })
  
  // Primitive and Object variables
  
  // A primitive (primitive value, primitive data type) is data that is nno an object and has no methids or properties. There are primitive data type (string, number, begInt, boolean, undefined, symbol, ull)
  
  const pirName = "David"// -> String
  const pirNum = 30 // -> integer/ number
  const trust = true // Boolean
  
  // Object variables are created to store and manipulate objects. They allow you to group related data and funtions together.
  
  const objPerson = {
    objName: 'Steve',
    objAge: 23
  }
  
  
  // Primitive and Object
  // When you assign  primitive type to a variable, the variable holds the actual value.
  // But when you assign an object to a variabe, the variable holds a reference to the memory location where the object is stored.
  
  // Primitive:
   const name1 = 'Ali';
   const age = 25;
  
  // Object: 
  const user1 = {
    name: 'Ballack',
    age: 30,
  };
  console.log("user's name:", user1.name)
  const user2 = user1;
  user2.name = 'jack';
  console.log("user's name:", user2.name)
  console.log("user's name:",user1.name)
  
  // Primitive 
  const pName = 'David'
  let x = pName
  console.log("b:", x)
  
  
  // To make new object with new reference, we use spread (...) operator.
  
  const user3 = {
    name: 'Ali',
    age: 27,
  }
  const user4 = {...user3}
  user4.name = "Black"
  console.log("user's name:", user3.name);
  console.log("user's name2:", user4.name);
  
  // Building objrcts via constructor
  
  const obj = new Object();
  obj.name = "David";
  obj.age = 32;
  obj.hobby = "football";
  console.log(`My name is ${obj.name}, and i am ${obj.age}, and i like ${obj.hobby}`)
  
  const keys = Object.keys(obj);
  console.log(keys);
  console.log("=====");
  const values = Object.values(obj);
  console.log(values);