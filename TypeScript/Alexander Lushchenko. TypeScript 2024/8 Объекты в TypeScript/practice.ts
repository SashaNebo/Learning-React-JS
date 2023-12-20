// Task 1
// type User = {
//   name: string
//   age: number
//   occupation: string
// }
// const users: User[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep',
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut',
//   },
// ]
// function logPerson(user: User) {
//   console.log(` - ${user.name}, ${user.age}`)
// }

// console.log('Users:')
// users.forEach(logPerson)

// Task 2

interface User {
  name: string
  age: number
  occupation: string
}

interface Admin {
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
]

function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`)
}

persons.forEach(logPerson)
