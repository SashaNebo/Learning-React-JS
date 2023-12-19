const a1: string = 'Hello TS'
document.querySelector('.out-1').textContent = a1

// получаем текст из парного тега

const a2: string = document.querySelector('.out-2').textContent
console.log(a2)

const a3: number = Number(document.querySelector('.out-3').textContent)
console.log(a3)

// получаем value из input

// const i5 = <HTMLInputElement>document.querySelector('.i-5')
const i5 = document.querySelector('.i-5') as HTMLInputElement
console.log(i5)

const i6 = document.querySelector('.i-6') as HTMLInputElement
console.log(i6)

i6.value = String('111')

// checkbox

const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement

if (checkbox.checked) {
  console.log('checked')
}

//
const inputRadio = <HTMLInputElement>document.querySelector('input[type="radio"]:checked')
console.log(inputRadio.value)

// select value
const select = <HTMLSelectElement>document.querySelector('.s-1')
console.log(select)

select.value = 'a'

// Если элемента нет на HTML странице
const i8 = document.querySelector('.i-8') as HTMLInputElement | null
console.log(i8)
// Example 1
console.log(i8?.value)
if (i8 !== null) console.log(i8.value)
