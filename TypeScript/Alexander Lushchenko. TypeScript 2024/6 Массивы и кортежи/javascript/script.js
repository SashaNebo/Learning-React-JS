"use strict";
// Как создать массив?
const arr_01 = [1, 2];
arr_01.push(3);
arr_01[3] = 4;
console.log(arr_01);
arr_01.length = 0;
console.log(arr_01);
// Создание readonly массива
const arr_02 = [10, 20, 30, 40, 50];
// arr_02.push(50) Error
// arr_02.length = 0 Error
console.log(arr_02);
// Автоопределение типа массива
const arr_03 = ['hello', 'ts'];
arr_03.push('!');
// arr_03.push(1) Error. Другой тип данных
console.log(arr_03);
// Автоопределение типа массива, Если так, то... работает
const arr_031 = ['hello', 1]; // Если так, то все работает
arr_031.push('!');
arr_031.push(2);
console.log(arr_031);
// Декомпозиция в TypeScript
const arr_04 = [11, 12, 13, 14, 15];
const [a, b, ...c] = arr_04;
console.log(a, b, c);
// Создание двумерного массива
// const arr_05: number[][] = [[1, 2, 3, 4, 5]]
const arr_05 = [];
arr_05[0] = [1, 2];
arr_05.push([3, 4, 5]);
console.log(arr_05);
// Смешанные по типу данных массивы
const arr_06 = [1, 2, 3, 'hello', 'ts'];
console.log(arr_06);
// 2 Вариант записи
const arr_07 = [...arr_06];
console.log(arr_07);
// Кортежи
const cort_01 = ['Ilya', 20];
// const cort_011: [string, number] = [20, 'Ilya'] Error
cort_01.push('Test');
cort_01.push(10);
cort_01.splice(0, 1);
// cort_01.push(false) Error
console.log(cort_01);
//
// const cort_012: string = [] Error
// Необязательный элемент в кортеже
const cort_02 = ['Ilya', 20, 73];
console.log(cort_02);
console.log(cort_02[0]);
cort_02[1] = 25;
console.log(cort_02);
// Если количество элементов к кортеже неопределенно
const cort_03 = [1, 'two', 'free', 'four'];
const cort_031 = [1, 'two', 'free', 'four']; // Тогда изменить кортеж нельзя
console.log(cort_03);
console.log(cort_031);
//# sourceMappingURL=script.js.map