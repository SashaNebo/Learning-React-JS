// Tasks -------------------

// Task 1
const p_01: string = 'type script'
console.log(p_01)

// Task 2
const p_02: string = ''
console.log(p_02)

// Task 3
const s_031: string = 'I am'
const s_032: string = 'Ilya'
const s_3: string = s_031 + ' ' + s_032 || `${s_031} ${s_032}`
console.log(s_3)

// Task 4
const b_1: string = 'The number:'
const b_2: number = 100
const b3: string = `${b_1} ${b_2}` || b_1 + ' ' + String(b_2)
console.log(b3)

// Task 5
const c_1: string = '10'
const c_2: string = '5.5'
const c_3: number = Number(c_1) * Number(c_2) || +c_1 * +c_2
console.log(c_3)

// Task 6
const d_1: string = 'Summ:'
const d_2: string = '350'
const d_3: string = '150'
const d_4: string = `${d_1} ${Number(d_2) + Number(d_3)}` || `${d_1} ${Number(+d_2 + +d_3)}` || `${d_1} ${+(+d_2 + +d_3)}`
console.log(d_4)

// Task 7
const e_1: string = '0'
const e_2: boolean = !!+e_1 || Boolean(+e_1) || Boolean(Number(e_1))
console.log(e_2)
