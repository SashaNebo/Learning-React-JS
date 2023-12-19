"use strict";
// Return type data
function t02() {
    return 1 + 2;
}
console.log(t02());
// Процедура
function t03() {
    document.querySelector('.out-1').textContent = 'Hello TS';
}
t03();
// Аргументы
function t04(a, b) {
    return a * b;
}
console.log(t04(2, 2));
// Процедура Аналог
function t05(a, b) {
    console.log(a * b);
}
t05(4, 4);
// Количество аргументов
function t06(a, b) {
    return b ? a * b : a;
}
console.log(t06(10));
// несколько типов значений
function checkEnail(email) {
    return email.includes('@') ? email.toLocaleLowerCase() : false;
}
if (checkEnail('ilya123enc')) {
    console.log('good');
}
else {
    console.log('ne good');
}
//# sourceMappingURL=script.js.map