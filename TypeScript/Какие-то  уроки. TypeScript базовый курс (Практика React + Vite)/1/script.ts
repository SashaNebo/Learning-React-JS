// Start

// How to set types in a typescript?
const c_01: number = null || NaN || Infinity
const c_02: string = 'qwe'
const c_03: boolean = true || false
const c_04: null = null
const c_05: undefined = undefined
const c_06: any = 'any' // 1 // false // null // NOT USE!!!

/*___ === ___*/

// Function typing
function f1(a: string, b: number, c: boolean): string {
  return c ? `${a} ${b}` : `${c}`
}

// Arrow function
const f2 = (a: string, b: number, c: boolean): string => {
  return c ? `${a} ${b}` : `${c}`
}

/*___ === ___*/

// Objects
/*1*/ const o1: { name: string; age: number } = { name: 'Alex', age: 20 }
/*2*/ const o2: { name: string; age: number; car: { color: string } } = { name: 'Alex', age: 20, car: { color: 'red' } }

/*___ === ___*/

// type, interface, optional
type User = {
  name: string
  age: number
  car: { color: string }
}

interface User2 {
  name: string
  age: number
  car?: { color: string }
}

const o3: User | User2 = { name: 'Alex', age: 20, car: { color: 'red' } }
const o4: User2 = { name: 'Alex', age: 20 }

// Array, Array<>, [],
const a1: string[] = ['q', 'w', 'e']
const a2: Array<string> = ['q', 'w', 'e']

// Practice

type U1 = {
  name: string
  age: number
  hasJob: boolean
  getMoreInfo?: (config: U1_Config) => U1_GetMoreInfo
  getNumber?: () => number
}

type U1_Config = {
  status: string
}

type U1_GetMoreInfo = {
  data: number
}

const u1: U1[] = [
  {
    name: 'Alex',
    age: 20,
    hasJob: true,
    getMoreInfo: config => {
      return { data: 123 }
    },
    getNumber: function () {
      return 10
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
]

// union, intersection
function f_01(config): { data: number } | null {
  return config === 'ok' ? { data: 123 } : null
}

// *Interface

interface I_1 {
  name: string
}

interface I_1 {
  age: number
}

const user_1: I_1 = {
  name: 'Alex',
  age: 20,
}

// ---

type U2 = {
  name: string
  age: number
}

type Car = {
  color: string
  speed: number
  left: boolean
}

type UserCar = U2 & Car
interface UserCar2 extends U2, Car {}

function renderUser(user: U2) {}
function renderCar(car: Car) {}
function renderUserCar(user_car: UserCar) {}

/*___ === ___*/

// Literal. Литеральные типы
function l1(s: 's', n: 1 | 2, b: true): void {}

l1('s', 1, true)

function l2(status: 'ok' | 'error'): string {
  return status === 'ok' ? 'good' : 'bad'
}

l2('error')

/*___ === ___*/

// as unknown as любой_тип

// @ts-ignore
const r1: boolean = l2('ok') // 1
const r2: any = l2('ok') // 2
// type guard - best variant // 3
const r3 = l2('ok') as unknown as string // 4

const one = [] as unknown as boolean
const two = {} as unknown as boolean
;(two as unknown as { name: string }).name
;(one as unknown as [1, 2, 3])[0]

/*___ === ___*/

// enum, const enum

const user_2: { name: string; age: number; car?: boolean } = {
  name: 'Alex',
  age: 20,
}
user_2.car = true

enum user_3 {
  name = 'Alex',
  age = 20,
}
// user_3.name = 'Ilya' Error
// String | Number

const enum user_4 {
  name = 'Alex',
  age = 20,
}

const Alex = user_4.name

// Когда использовать константный enum, а когда лучше использовать объект
// - Если мы хотим объект в котором будут числа либо строки, тогда делать константный enum
// - Если мы хотим с объектом как-то работать, например спред оператор, либо хранить функции, тогда испоьзовать объект

// Example enum
const enum Status {
  NOT_FOUND = 404,
  SUCCESS = 200,
  ERROR = 500,
}

const enum ErrorInfo {
  empty = 'Pole ne zaplneno',
  unknown_symbols = '!@#$%^&',
  min_length = '10',
}

/*___ === ___*/

// Utility Types

type User3 = Partial<{
  name: string
  age: number
  car: boolean
}>

type User4 = Required<{
  name?: string
  age?: number
  car?: boolean
}>

// * Readonly

const hello: Readonly<{ hi: () => string }> = {
  hi: () => 'Hey',
}
// hello.by = () => console.log('Bye') Error

// Pick, Omit

type User5 = Pick<User4, 'name' | 'age'>
type User6 = Omit<User4, 'name' | 'age'>

// Must have: Readonly, Partial, Required, Pick, Ommmit
console.log(1)
