// Loops
// Today's agenda 
// 1) while loop
// 2) for loop


// what is loop?: loop malum birholatdan kelib chiqib operationlarni qayta bajarish uchun ishlatiladigan jarayon
// WHILE LOOP: maxsus taskni condition loop xolati false ko'rsatguncha bajaradi.

let count = 0;
while(count <= 10) {
    console.log('while executed', count);
    count = count + 1
}

console.log('passed here');
console.log('======');
// For loop; maxsus taskni condition loop xolati false ko'rsatguncha bajaradi.

for (let i = 0; i <= 10; i++) {
    console.log('for executed', i);
}
console.log('============');

for (let i = 10; i >= 0; i--) {
    console.log('for executed', i);
}
console.log('- for loop passed here');

// Iteration methods: map, filter ...git 
const fruits = ['apple', 'cherry', 'lemon', 'banana']
fruits.map((ele, index) => {
    console.log(`${index}: ${ele}`);
})

// for loop value: Agar of ishlatsak bizga valuelarni olib beradi
 for (const ele of fruits) {
    console.log(fruits);
 }

 // Agar in ishlatsak bizga indexlarni ollib beradi
 for (const index in fruits) {
    console.log(index);
 }