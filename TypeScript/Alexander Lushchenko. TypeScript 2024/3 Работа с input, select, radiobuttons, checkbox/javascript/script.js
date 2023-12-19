"use strict";
const a1 = 'Hello TS';
document.querySelector('.out-1').textContent = a1;
// получаем текст из парного тега
const a2 = document.querySelector('.out-2').textContent;
console.log(a2);
const a3 = Number(document.querySelector('.out-3').textContent);
console.log(a3);
// получаем value из input
// const i5 = <HTMLInputElement>document.querySelector('.i-5')
const i5 = document.querySelector('.i-5');
console.log(i5);
const i6 = document.querySelector('.i-6');
console.log(i6);
i6.value = String('111');
// checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log('checked');
}
//
const inputRadio = document.querySelector('input[type="radio"]:checked');
console.log(inputRadio.value);
// select value
const select = document.querySelector('.s-1');
console.log(select);
select.value = 'a';
// Если элемента нет на HTML странице
const i8 = document.querySelector('.i-8');
console.log(i8);
// Example 1
console.log(i8?.value);
if (i8 !== null)
    console.log(i8.value);
//# sourceMappingURL=script.js.map