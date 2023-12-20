"use strict";
// Объекты в JS
const userJS = {
    name: 'Ilya',
    age: 20,
};
// ---
// Объекты в TS
const userTS = {
    name: 'Ilya',
    age: 20,
};
console.log(userTS);
console.log(userTS.name);
console.log(userTS['age']);
// userTS.password = '123qwe' Error
userTS.name = 'Alex';
// userJS.name = 101 Error
console.log(userTS);
// ---
// Необязательные свойства в объекте
const user2 = {
    name: 'Alex',
    age: 20,
    // hasCar: false,
};
console.log(user2);
// ---
// Проверяем свойства в объекте. Оператор in
// user2.test Error
'name' in user2 ? console.log(true) : console.log(false);
// ---
// Обращение к необязательному свойству
console.log(user2.hasCar);
// console.log(user2.test) Error
// ---
// Объект как аргумент функции
function userProcess(some_var) {
    console.log(some_var.name);
    console.log(some_var);
}
const obj = { name: 'Ivan', age: 20, hasCar: false };
userProcess(obj);
// userProcess({ name: 'Ivan', age: 20, hasCar: false }) Error - 'hasCar' does not exist in type
// Декомпозиция
function foo({ name, age }) {
    console.log(name, age);
}
foo(user2);
foo(obj);
//# sourceMappingURL=script.js.map