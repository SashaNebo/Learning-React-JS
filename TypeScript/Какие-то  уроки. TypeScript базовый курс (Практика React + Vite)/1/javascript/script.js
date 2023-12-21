"use strict";
// Start
// How to set types in a typescript?
const c_01 = null || NaN || Infinity;
const c_02 = 'qwe';
const c_03 = true || false;
const c_04 = null;
const c_05 = undefined;
const c_06 = 'any'; // 1 // false // null // NOT USE!!!
/*___ === ___*/
// Function typing
function f1(a, b, c) {
    return c ? `${a} ${b}` : `${c}`;
}
// Arrow function
const f2 = (a, b, c) => {
    return c ? `${a} ${b}` : `${c}`;
};
/*___ === ___*/
// Objects
/*1*/ const o1 = { name: 'Alex', age: 20 };
/*2*/ const o2 = { name: 'Alex', age: 20, car: { color: 'red' } };
const o3 = { name: 'Alex', age: 20, car: { color: 'red' } };
const o4 = { name: 'Alex', age: 20 };
// Array, Array<>, [],
const a1 = ['q', 'w', 'e'];
const a2 = ['q', 'w', 'e'];
const u1 = [
    {
        name: 'Alex',
        age: 20,
        hasJob: true,
        getMoreInfo: config => {
            return { data: 123 };
        },
        getNumber: function () {
            return 10;
        },
    },
    {
        name: 'Bob',
        age: 45,
        hasJob: true,
        // getMoreInfo: config => {
        //   return { data: 321 }
        // },
    },
];
// union, intersection
function f_01(config) {
    return config === 'ok' ? { data: 123 } : null;
}
const user_1 = {
    name: 'Alex',
    age: 20,
};
function renderUser(user) { }
function renderCar(car) { }
function renderUserCar(user_car) { }
/*___ === ___*/
// Literal. Литеральные типы
function l1(s, n, b) { }
l1('s', 1, true);
function l2(status) {
    return status === 'ok' ? 'good' : 'bad';
}
l2('error');
/*___ === ___*/
// as unknown as любой_тип
// @ts-ignore
const r1 = l2('ok'); // 1
const r2 = l2('ok'); // 2
// type guard - best variant // 3
const r3 = l2('ok'); // 4
const one = [];
const two = {};
two.name;
one[0];
/*___ === ___*/
// enum, const enum
const user_2 = {
    name: 'Alex',
    age: 20,
};
user_2.car = true;
var user_3;
(function (user_3) {
    user_3["name"] = "Alex";
    user_3[user_3["age"] = 20] = "age";
})(user_3 || (user_3 = {}));
const Alex = "Alex" /* user_4.name */;
// * Readonly
const hello = {
    hi: () => 'Hey',
};
// Must have: Readonly, Partial, Required, Pick, Ommmit
console.log(1);
//# sourceMappingURL=script.js.map