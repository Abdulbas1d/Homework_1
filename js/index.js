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