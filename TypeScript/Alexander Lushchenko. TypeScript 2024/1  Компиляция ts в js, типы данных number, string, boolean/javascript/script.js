"use strict";
console.log(1);
console.log(1 + 1);
// Number -------------------
let n = 0;
console.log(n);
let n1;
n1 = 100;
console.log(n1);
const n2 = 1 / 3;
console.log(n2);
// String -------------------
const s1 = 'hello ';
const s2 = 'TypeScript';
console.log(s1);
let s3 = s1 + s2;
console.log(s3);
// Boolean -------------------
const b1 = true;
console.log(b1, typeof b1);
const c1 = Number('666');
console.log(c1);
const c2 = String(9999);
console.log(c2);
const c3 = !!null || Boolean(null);
console.log(c3);
document.querySelector('.out-1').textContent = String(c1);
const n5 = Number(document.querySelector('.out-2').textContent);
console.log(n5, typeof n5);
//# sourceMappingURL=script.js.map