
// ARRAYS itteration methos.
// Today's agenda:
// 1) Arraylarning assosiy iteration methodlari: forEach, map va filter
// 2) Arraylarni yordamchi iteration metodlari: reduce, some va every

// 1) Arraylarning assosiy iteration methodlari: forEach, map va filter
// forEach, map, filter -> immutable methods

// MAP() - bu br arraydagi har bir element uchun bir martalik berilgan callback function hisoblanadi va natijadan yangi bir array yaratadi. 
// Bu xolatda arraydagi har bir element ustida amal bajariladi. 

const mapList = [1,2,3,4,5,6,7]

const mapNew = mapList.map(el => el * el)
console.log(mapNew);

const newFullList = mapList.map((ele, index) => {
    console.log(`${index} => ${ele}`);
    console.log( ele * 5);
    return ele * 5;
});

const mapNew1 = mapList.map(el => el * 10);
console.log(mapNew1);

const task = [2,5,7,8,9,1]
const result1 = task.map((ele, index) => {
    console.log( ele === 7 ? ele : null)
});

// filter() -> 
//  filter() metodi berilgan arrayning bir qismini nusxasini yaratadi va 
// bu nusxani berilgan funksiya tomonidan tekshirilgan shartni qanoatlantiradigan elementlardan faqat yaratilgan arrayning o'z ichiga oladi.

const filList = task.filter((ele, index) => {
    console.log(ele === 7? ele : null);
    return ele === 7 ? ele : null
})

// reduce, some , every

// reduce() -> sonlardan iborat array bo'lib, arraydagi elementni bitta valuega tushirishga ishlatiladi.
// reduce arraylarni har bir elementi ustida takrorlanadi va ularni bitta natijaga jamlash uchun berilgan functionni natijasini aniqlaydi.
// reduce() -> 2ta qiymat oladi. 1 - function, 2- initial value.
// inital value sets to 0, because 0 will be starting index number.

const nums = [2,3,4,6,7,9,1]

// initial value, current valueni nechidan boshlanishini belgilaydi.
const resultR = nums.reduce((total, curValue, curIndex) => {
    console.log(`${curIndex}: ${curValue}`);
    console.log(total + curValue);
    return total + curValue;
}, 0);

// some() ->  methodi function tomonidan berildan shartni kamida bitta element bajarish bajarmasligini tekshiradi. 
// Agar bitta element o'tsa true qaytaradi, agar hichqanday element o'tmasa false qaytaradi.

const resSum = nums.some((ele, index) => {
    console.log(`${index}: ${ele}`);
    return ele === 6;
})
console.log(resSum);

// every() -> methodi function tomonidan berilgan shartni hamma element bajarishini tekshiradi va boolean qaytaradi.

const resSum2 = nums.some((ele, index) => {
    console.log(`${index}: ${ele}`);
    console.log( ele > 3);
    return ele === 3;
})
console.log(resSum2);
