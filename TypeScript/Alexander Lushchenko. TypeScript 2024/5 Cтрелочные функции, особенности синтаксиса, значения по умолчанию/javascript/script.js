"use strict";
// Стрелочные функциии
const t01 = () => {
    console.log(1);
};
// arguments
t01();
const t02 = (a, b) => +a * +b;
console.log(t02('1', '2'));
//
const t03 = (a, b) => {
    return b ? a * b : a;
};
console.log(t03(20));
//
const t04 = (a) => a;
console.log(t04('apple'));
// аргументы по умолчанию
const t05 = (a = 100, b = 0) => Math.max(a, b);
console.log(t05());
//
function t06(a = 'Default A, ', b = 'Default B') {
    return a + b;
}
console.log(t06());
//# sourceMappingURL=script.js.map