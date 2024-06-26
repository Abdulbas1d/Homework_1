// 1-Misol

// const array = ['apple', 'pear', 'banana', 'kiwi', 'grape', 'melon'];
// function someWords(words) {
//     return words
//         .filter(word => word.length >= 5)
//         .map(word => word.toUpperCase());
// }
// const result = someWords(array);
// console.log(result);





// 2-Misol

// const studentArray = [
//     { name: 'Shokir', age: 19},
//     { name: 'Umar', age: 22},
//     { name: 'Shuxrat', age: 48},
//     { name: 'Zafarbek', age: 13},
// ];
// function findStudentage(students) {
//     const student = students.find(student => student.age > 20);
//     return student ? student.name.toUpperCase() : null;
// }

// const result = findStudentage(studentArray)
// console.log(result);





// 3-Misol

// const someProduct = [50, 150, 200, 90, 100, 80, 180];
// function highProducts(prices) {
//     return prices
//         .filter(price => price > 100)
//         .reduce((total, price) => total + price, 0);
// }

// const total = highProducts(someProduct);
// console.log(total);





// 4-Misol

// 4-Misolni Yaxshi tushunmaganim uchun ishla olmadim. 12 ta masaladan 11 tasini ishladim keyin safar bu holat qaytarilmedi. Hudo hohlasa




// 5-Misol

// const number = [1, 2, 3, 4, 5];
// function calculate(arr) {
//     return arr.map(num => num * num);
// }
// function logElements(arr) {
//     arr.forEach(num => console.log(num));
// }
// const numbers = calculate(number);
// logElements(numbers);





// 6-Misol

// let staffSalaries = [1500, 2500, 3000, 1800, 2200];
// function newStaffSalary(salaries) {
//     let filteredSalaries = salaries.filter(salary => salary > 2000);

//     let increasedSalaries = filteredSalaries.map(salary => salary * 0.10);

//     let staffNewSalary = increasedSalaries.reduce((accumulator, current) => accumulator + current, 0);

//     return staffNewSalary;
// }
// console.log(newStaffSalary(staffSalaries));





// 7-Misol

// const students = [
//     { name: 'Alisher', age: 20, grade: 85 },
//     { name: 'Bobo', age: 22, grade: 75 },
//     { name: 'Shavkat', age: 23, grade: 95 },
//     { name: 'Davronbek', age: 21, grade: 60 },
//     { name: 'Ilhom', age: 24, grade: 82 }
// ];

// function firstStudent80(students) {
//     const student = students.find(student => student.grade >= 80);
//     if (student) {
//         return { name: student.name, age: student.age };
//     } else {
//         return null;
//     }
// }

// function firstStudentname(students) {
//     return students
//         .filter(student => student.grade > 80)
//         .map(student => student.name.toUpperCase());
// }

// const firstStudent = firstStudent80(students);
// console.log(firstStudent);

// const namesAbove80 = firstStudentname(students);
// console.log(namesAbove80);





// 8-Misol

// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }

// const inputString = "salom, najot ta'lim";
// const result = convertToUpperCase(inputString);
// console.log(result);





// 9-Misol

// function contains(mainString, substring) {
//     return mainString.includes(substring);
// }

// const mainString = "Hello, welcome to the world of JavaScript!";
// const substring = "welcome";
// const result = contains(mainString, substring);
// console.log(result);





// 10-Misol

// function replaceJavaScript(str) {
//     return str.replace('JS');
// }

// const inputString = "I love JavaScript! JavaScript is versatile.";
// const result = replaceJavaScript(inputString);
// console.log(result);





// 11-Misol

// function reverseWords(str) {
//     const words = str.split(' ');

//     const reversedWords = words.reverse();

//     const reversedString = reversedWords.join(' ');

//     return reversedString;
// }

// const inputString = "Hello world, how are you";
// const reversedString = reverseWords(inputString);
// console.log(reversedString);





// 12-Misol

// function removeFreeSpace(str) {
//     return str.trim();
// }

// const inputString = "   Hello,  world!   ";
// const result = removeFreeSpace(inputString);
// console.log(result);






// Misol va Masalalarga izohlar


// 1-Izoh
// 1. a o‘zgaruvchisi 1 qiymati bilan e’lon qilinadi.
// 2. Tashqi aniqlangan funksiya mavjud.
// 3. Tashqi funktsiya ichida yana bir b o'zgaruvchisi 2 qiymati bilan e'lon qilinadi.
// 4. Tashqi funktsiyaning ichida ichki nomli boshqa ichki funksiya mavjud.
// 5. Ichki funksiya ichida c o'zgaruvchisi 3 qiymati bilan e'lon qilinadi.
// 6. a, b va c o'zgaruvchilar qiymatlarini chop etish uchun console.log() usuli qo'llaniladi.
// 7. Inner() funksiyasi tashqi() funksiyasi ichidan chaqiriladi.
// Kod tashqi() funktsiyasini chaqirish orqali bajarilganda, u chiqadi:
// 1, 2, 3.





// 2-Izoh
// Berilgan kod chiqadi:
// aniqlanmagan
// 5

// Bu JavaScript-ni ko'tarish tufayli sodir bo'ladi. Kod bajarilganda, o'zgaruvchi deklaratsiyasi "var x = 5;" JavaScript dvigateli tomonidan o'z ko'lamining yuqori qismiga ko'tariladi. Shuning uchun, birinchi console.log bayonotida x e'lon qilingan, lekin hali qiymat tayinlanmagan, natijada "aniqlanmagan" ekranga chiqadi. Ikkinchi console.log bayonotida x 5 qiymati bilan belgilandi, shuning uchun u kutilganidek ekranga chiqadi.






// 3-Izoh
// Taqdim etilgan kod xatolikka olib keladi, chunki "y" o'zgaruvchisi e'lon qilinishidan oldin foydalanilmoqda. Bu JavaScript-da "ReferenceError" sifatida tanilgan. Birinchi console.log() iborasi “y” qiymatiga kirishga harakat qilganda, “y” hali aniqlanmaganligini aniqlaydi va bu xatoga olib keladi.

// JavaScript-da o'zgaruvchilar ko'tariladi, ya'ni ular kompilyatsiya bosqichida o'z doirasining yuqori qismiga ko'chiriladi. Biroq, ishga tushirish emas, balki faqat deklaratsiya ko'tariladi. Shunday qilib, bu holda, "y" o'zgaruvchisi o'z doirasining yuqori qismiga ko'tarilgan bo'lsa-da, uning qiymati kodda keyinroq tayinlanmaydi (y = 10; bo'lsin), natijada unga kirishdan oldin xatolikka yo'l qo'yiladi.





// 4-Izoh
// Taqdim etilgan kod ReferenceError xatosini keltirib chiqaradi: ishga tushirishdan oldin "z" ga kirish mumkin emas. Bu xatolik 'z' o'zgaruvchisi e'lon qilinishidan va qiymat tayinlanishidan oldin qayd etilganligi sababli yuzaga keladi. JavaScript-da let yoki const bilan e'lon qilingan o'zgaruvchilar, var bilan e'lon qilingan o'zgaruvchilar kabi o'z doirasining yuqori qismiga ko'tarilmaydi. Shuning uchun, uni ishga tushirishdan oldin "z" ga kirishga urinish xatolikka olib keladi. Ushbu muammoni hal qilish uchun kod qiymatini yozishdan oldin "z" ni e'lon qilish va ishga tushirish uchun o'zgartirilishi kerak.






// 5-Izoh
// For...in sikli ob'ektning sanab bo'ladigan xususiyatlarini, bu holda talaba ob'ektini takrorlaydi. U kvadrat qavs ichidagi kalit yordamida qiymatga kirish orqali har bir kalit-qiymat juftligini ekranga chiqaradi. Ushbu siklning natijasi quyidagicha bo'ladi:
// ism: Elis
// yosh: 25
// Kurs: Informatika

// For...of sikli massivlar kabi takrorlanadigan ob'ektlarni takrorlash uchun ishlatiladi. Bunday holda, u baholar massivida takrorlanadi va massivdagi har bir elementni ekranga chiqadi. Ushbu siklning natijasi quyidagicha bo'ladi:
// 90
// 85
// 88





// For...in sikli ob'ektlar bilan ishlaydi va kalitlarni oladi, for...of sikli esa massivlar kabi takrorlanadigan ob'ektlar bilan ishlaydi va ularga kalitlar orqali kirishga hojat qoldirmasdan to'g'ridan-to'g'ri qiymatlarni oladi.
// 6-Izoh
// 1-topshiriq:
// HoistExample funksiyasida 'a' o'zgaruvchisi var kalit so'zi yordamida e'lon qilinadi. Yuk ko'tarish vaqtida "a" o'zgaruvchisi funktsiya doirasining yuqori qismida e'lon qilinadi, lekin unga qiymat tayinlanmaguncha aniqlanmagan bo'lib qoladi. Shuning uchun, birinchi console.log(a) undefined, ikkinchi console.log(a) esa tayinlangandan keyin 20 chiqadi.

// 2-topshiriq:
// ScopeExample funksiyasida x, y va z o'zgaruvchilari mos ravishda var, let va const yordamida turli sohalarda e'lon qilinadi. X o'zgaruvchisiga var kalit so'zi bilan yuklanganligi sababli if blokida kirish mumkin. y va z o'zgaruvchilari mos ravishda let va const bilan bloklangan, shuning uchun ularga faqat tegishli bloklari ichida kirish mumkin.

// 3-topshiriq:
// console.log bayonotida sintaksis xatosi bor, chunki 3-topshiriq satr sifatida ko'rib chiqilishi uchun qo'shtirnoq ichiga olinishi kerak.

// For...in tsikli ob'ekt ob'ektining har bir xususiyatini takrorlaydi va har bir xususiyatni qiymati bilan birga tizimdan chiqaradi.

// For...of sikli arr massividagi har bir elementni takrorlaydi va har bir elementni tizimdan chiqaradi.

// Umuman olganda, ushbu kod ko'tarish, qamrov, TDZ (Vaqtinchalik o'lik zona), ob'ektlar xususiyatlarini takrorlash uchun for...in loop va massiv elementlarini takrorlash uchun for...of sikl kabi tushunchalarni namoyish etadi.
