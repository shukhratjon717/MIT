// ARRAYS 
// Today's agenda 
// 1) What is array and its properties?
// 2) index and vale of arrays
// 3) state properties of arrays
// simple methods of arrays

// What is arrays: O'zini ichki tartibiga ega bo'lgan maxsus object. An array in JavaScript is a type of global object that is used to store data. 
// Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items.
// There are 2 ways of making arrays

// 1) literal 
 const list = [1,2,3,4,5,7,3,6,9]
 console.log('list',list);


// 2) constructor: We totaly make arrays in literal ways.

const list2 = new Array('apple', 'cherry', 'banana')
console.log('list2:', list2);

// index and value of arrays

const fruits = ['apple', 'watermelon', 'cherry', 'banana']
console.log('fruits', fruits);
// values; 'apple', 'watermelon', 'cherry', 'banana'
// index:     0    ,    1       ,     2   ,    3

const fruit0 = fruits[0]
console.log('fruit ',fruit0);

// it is possible to use optional types like number, string etc ...

const mixList = [1,2,3, 'apple', 5,6 ]
     

// To change one assigned value in array

const fruitsList = ['apple', 'banana', 'cherry']
console.log('before,', fruitsList);
fruitsList[0] = 'melon';
console.log('after:', fruitsList);

// adding new element to the array;
fruitsList[3] = 'lemon';
console.log(fruitsList);

// properties: length
const fruitList = ['apple', 'banana', 'cherry']

const size = fruitList.length;
console.log(size);

fruitList[3] = 'lemon';
console.log(fruitList);

// methods: regular methods:  push(), pop(), unshift(), shift(); sort(), reverse(), includes(), indexOf(),
// toString(), join(); slice(), spice(), concat();

// To add an element at the end of array without knowing the index number, we use 'push()' method

const mevalar = ['olma', 'gilos', 'banan']
mevalar.push('limon')
console.log('before:', mevalar);

// To add an element at the beginning of array without knowing the index number, we use 'unshift()' method
mevalar.unshift('qovun')
console.log('after:',mevalar);


// to remove the last element of the array, we use pop() method
const cutFruit = mevalar.pop();
console.log(cutFruit);
console.log(mevalar);

// to remove the first element of the array, we use shift() method

const firstFruit = mevalar.shift();
console.log(firstFruit);
console.log(mevalar);

// to sort a single numbers of array, we use sort() method

const newList = [5,3,2,1,6,7,8,9,0]
console.log('before;', newList);
newList.sort();
console.log('after:', newList);

// to change the position of element in array, we use reverse() method,

newList.reverse();
console.log(newList);

// to check weather specific element exist in the array or not, we use includes() method

const check = ['apple', 'lemon', 'orange'];
const result = check.includes('lemon');
console.log('true', result);
const resultF = check.includes('cherry');
console.log('false:', resultF);

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const check = ['apple', 'lemon', 'orange'];
const result2 = check.indexOf('cherry')
console.log('not exist:', result2);

const result3 = check.indexOf('apple')
console.log('exist:', result3);

const result4 = check.indexOf('banana')
console.log('exist:', result4);

// toString : is used to change the array to the string.

const string1 = check.toString()

console.log('string:', string1);

// join() is uesd to to change the array to the string.

const string2 = check.join();
console.log(string2);

// difference is that we can add elements in join() method. they don't mutate the array, they are immutable.

// slice() is used to cut off the asked part. it requires 2 elements :first -> starting element, 2nd ending element not including ending element.
const collection = ['cherry', 'apple', 'orange']

const newCol = collection.slice(0,2)
console.log(newCol);

// splice() is used to remove totally given elements from the array, it deletes the elements and keeps the rest part by mutating the array
collection.splice(0,1, 'lemon') // lemon will be added instead of deleted elements.
console.log('list: ' ,collection);

// Mutable => push(), pop(), unshift(), shift(), sort(), reverse(), splice().

// Inmutable => includes(), indexOf(), toString(), join(), slice(), concat().


// concat() is used to add 2 elements with each other.
const num = [1,3,11]

const newList2 = collection.concat(num)
console.log(newList2);


// ARRAYS itteration methos.
// Today's agenda:
// 1) Arraylarning assosiy iteration methodlari: forEach, map va filter
// 2) Arraylarni yordamchi iteration metodlari: reduce, some va every

// 1) Arraylarning assosiy iteration methodlari: forEach, map va filter
// forEach, map, filter

// MAP() - bu br arraydagi har bir element uchun bir martalik berilgan callback function hisoblanadi va natijadan yangi bir array yaratadi.

const mapList = [1,2,3,4,5,6,7]

const mapNew = list.map(el => el*el)
console.log(mapNew);


