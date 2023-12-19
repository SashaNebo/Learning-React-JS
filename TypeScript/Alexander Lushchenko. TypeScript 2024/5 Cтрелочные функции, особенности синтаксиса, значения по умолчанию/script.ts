// Стрелочные функциии

const t01 = (): void => {
  console.log(1)
}

// arguments
t01()

const t02 = (a: string, b: string): number => +a * +b

console.log(t02('1', '2'))

//

const t03 = (a: number, b?: number): number => {
  return b ? a * b : a
}

console.log(t03(20))

//

const t04 = (a: string): string => a
console.log(t04('apple'))

// аргументы по умолчанию

const t05 = (a: number = 100, b: number = 0): number => Math.max(a, b)
console.log(t05())

//

function t06(a: string = 'Default A, ', b: string = 'Default B'): string {
  return a + b
}

console.log(t06())
