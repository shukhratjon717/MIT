// Operators and Conditions.

// Operatorlar value va variablelarda operationlar bajarish uchun ishlatiladigan symbollar hisoblanadi.

// ==, ===, <, <=, >, >=, &&, ||, !!, !, !=, !==, ternary operator, nullish operator.

// == -> 2ta tenglik operatori berilgan element qiymatlarini solishtiradi.

const a = 3;
const b = '3'
console.log(a == b);

// === -> 2talik tenglik operatori berilgan elementlarni qiymatini hamda typelarini soishtiradi.
 const d = 4;
 const e = '4';
 console.log(d === e);

 // != (teng emasmi) -> truni falsega, falseni truega aylantirish uchun ishlatiladi.

 const a1 = 3;
 const b1 = '3'
 console.log(a1 != b1);  // a bga teng emasmi?

 // !== -> berilgan elementni qiymati hamda typelari bilan tekshiradi

 console.log(a1 !== b1);

 // <= o'ng tomondagi elementni chap tomondagi elementda katta yoki tengligini tekshiradi.
    // const a = 3;
    // const b = 3

    console.log(a <= b);

// >= O'ng tomondagi element chaap tomondagi elementdan katta yoki tenglgini tekshiradi.
    // const a = 3;
    // const b = 3

    console.log(a >= b);

// && (Logical end) - operatori 2ta elementni bir biriga qoshib amal bajarish imkonini beradi. 
// Agar ikkala element true bo'lsa, valueni true qaytaradi bo'lmasa false qaytaradi.

const num1 = 7;
const num2 = 8;
const result1 = num1 > 0 && num2 > 0; // num1 va num2 0dan katta bo'lganligi uchun return true boladi.
console.log(result1);

// || (Logical or) operatori 2ta qiymatni bir vaqtda ishlatish uchun foydalaniladi. Agar bir qiymat true bols, butun logic true bo'ladi. aks holda false bo'ladi.

const result2 = num1 > 0 || num2 > 9;
console.log("result:", result2);  // num1 0dan kattaligi uchun true return boldi.

// !! -> bu operator berilgan elementlardan kelib chiqib qiymat qaytaradi. Agar element truthy bo'lsa, true qaytadi. 
// Agar element falsy bo'lsa, false qaytaradi.

// falsy qiymat: false, null, 0, undefined.
// truthy: everthing rest is truthy;

// ! -> operatori agar element truthy qiymat bo'lsa, bizga false qaytaradi, agar element falsy qiymat bo'lsa, true qaytaradi.

const num3 = 'hello';
const result3 = !num3;
console.log('result3', result3);

// ternary operator -> if else operatorlatini qisqa shaklda isodalash uchun ishlatiladi.
// Terary operatori mlum bir conditiondan kelib chiqib xulosa qiladi.
// Syntax
// condition  ? expression if true   : expression if false;
const g = 5 ;
const h = g > 0 ? 'positive' : 'negative';
console.log(h);

// Nullish operatori -> Qiymatni null yoki null emasligidan kelib chiqi qiymat tanlab beradi. Operator belgisi 2 tali so'roq ??;
const c1 = 0; 
const d1 = c1 ?? 100;
console.log(d1);

// Conditions: IF va Switch

// If condition -> control flow ifodasidir. Uning malumoti true bolganda belgilangan shart boyicha kod blocni bajarish uchun ishlatiladi.
const apples = 100;
if(apples >=14) {
    console.log('Your apples are not less than 100');
};

if(apples >= 50) {
    console.log('your apples are bot less than 50  and less than 100');
};

if(apples >=100) {
    console.log('your apples are not less than 100');
};

const fruits = 100;

if(fruits >=100) {
    console.log('your apples are not less than 100');
}

else if(fruits >=50) {
    console.log('Your apples are not less than 100');
}

else{
    console.log('your apples are bot less than 50  and less than 100');
};

// Switch-case operatori bir qator shartlar to'plamini tekshirish uchn ishlatiladi.

const grades = 'A';

switch(grades) {
    case "A": console.log('Your grade is best'); break;
    case "B": console.log('Your grade is good'); break;
    case "C": console.log('Your grade is not bad'); break;
    default : console.log('Your grade is not provided');
}



