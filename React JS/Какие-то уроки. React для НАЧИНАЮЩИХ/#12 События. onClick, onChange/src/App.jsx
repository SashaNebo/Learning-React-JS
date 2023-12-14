import React from 'react'
import './index.css'

let USERS = [
  { id: 1, name: 'Alex', surname: 'test', age: 20, passportId: 123 },
  { id: 2, name: 'Alex', surname: 'test2', age: 20, passportId: 66 },
  { id: 3, name: 'John', surname: 'test2', age: 56, passportId: 123 },
  { id: 4, name: 'Bob', surname: 'test3', age: 10, passportId: 50 },
]

function f1(e) {}

function f2({ target }) {}

function f3(e) {
  e.preventDefault()
}

const createKey = index => {
  let str = ''
  Object.values(USERS[index]).map(value => {
    str += value + '__'
  })
  return str
}

const App = () => {
  const data = []

  return (
    <form action='GET' onSubmit={f3}>
      <input type='text' onChange={f2} />
      <button type='submit' onClick={f1}>
        NICE
      </button>
    </form>
  )
}

export { App }
