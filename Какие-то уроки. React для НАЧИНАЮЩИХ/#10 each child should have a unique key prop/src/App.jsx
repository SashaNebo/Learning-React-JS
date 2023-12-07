import React from 'react'
import './index.css'

const USERS = [
  { name: 'Alex', surname: 'test', age: 20, passportId: 123 },
  { name: 'Alex', surname: 'test2', age: 20, passportId: 66 },
  { name: 'John', surname: 'test2', age: 56, passportId: 123 },
  { name: 'Bob', surname: 'test3', age: 10, passportId: 50 },
]

const createKey = index => {
  let str = ''
  Object.values(USERS[index]).map(value => {
    str += value + '__'
  })
  return str
}

const App = () => {
  return (
    <div>
      {USERS.map((user, i) => (
        <h3 key={createKey(i)} className='hello'>
          {user.name}
        </h3>
      ))}
    </div>
  )
}

export { App }
