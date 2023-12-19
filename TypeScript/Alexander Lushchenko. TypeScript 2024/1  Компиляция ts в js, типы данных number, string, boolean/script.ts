console.log(1)
console.log(1 + 1)

// Number -------------------
let n: number = 0
console.log(n)

let n1: number
n1 = 100
console.log(n1)

const n2: number = 1 / 3
console.log(n2)
// String -------------------
const s1: string = 'hello '
const s2: string = 'TypeScript'
console.log(s1)

let s3: string = s1 + s2
console.log(s3)
// Boolean -------------------
const b1: boolean = true
console.log(b1, typeof b1)

const c1: number = Number('666')
console.log(c1)

const c2: string = String(9999)
console.log(c2)

const c3: boolean = !!null || Boolean(null)
console.log(c3)

document.querySelector('.out-1').textContent = String(c1)

const n5: number = Number(document.querySelector('.out-2').textContent)
console.log(n5, typeof n5)
