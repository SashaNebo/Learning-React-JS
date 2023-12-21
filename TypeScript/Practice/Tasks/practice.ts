// Task 1

/*
type User = {
  name: string
  age: number
  occupation: string
}

const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
]

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:')
users.forEach(logPerson) 
*/

// =============================================

// Task 2

/*
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
*/

// =============================================

// Task 3

/*
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

function logPerson(person: Person) {
  let additionalInformation: string
  if ('role' in person) {
    additionalInformation = person.role
  } else {
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}

persons.forEach(logPerson)
*/

// =============================================

// Task 4

/*
interface User {
  type: 'user'
  name: string
  age: number
  occupation: string
}

interface Admin {
  type: 'admin'
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
]

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin'
}

function isUser(person: Person): person is User {
  return person.type === 'user'
}

function logPerson(person: Person) {
  let additionalInformation: string = ''
  if (isAdmin(person)) {
    additionalInformation = person.role
  }
  if (isUser(person)) {
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}

console.log('Admins:')
persons.filter(isAdmin).forEach(logPerson)

console.log()

console.log('Users:')
persons.filter(isUser).forEach(logPerson)
*/

// =============================================

// Task 5

interface User {
  type: 'user'
  name: string
  age: number
  occupation: string
}

interface Admin {
  type: 'admin'
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  {
    type: 'admin',
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    type: 'admin',
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
  {
    type: 'user',
    name: 'Wilson',
    age: 23,
    occupation: 'Ball',
  },
  {
    type: 'admin',
    name: 'Agent Smith',
    age: 23,
    role: 'Administrator',
  },
]

const isAdmin = (person: Person): person is Admin => person.type === 'admin'
const isUser = (person: Person): person is User => person.type === 'user'

function logPerson(person: Person) {
  let additionalInformation = ''
  if (isAdmin(person)) {
    additionalInformation = person.role
  }
  if (isUser(person)) {
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}

function filterUsers(persons: Person[], criteria: { age: Person['age'] }): User[] {
  return persons.filter(isUser).filter(user => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[]
    return criteriaKeys.every((fieldName: Person['name']) => {
      return user[fieldName] === criteria[fieldName]
    })
  })
}

console.log('Users of age 23:')

filterUsers(persons, {
  age: 23,
}).forEach(logPerson)
