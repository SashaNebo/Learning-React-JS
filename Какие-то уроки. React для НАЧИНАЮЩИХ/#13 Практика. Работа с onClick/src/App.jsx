import React from 'react'
import './index.css'
import { UserName } from './UserName'

let USERS = [
  { id: 1, name: 'Alex', surname: 'test', age: 20, passportId: 123 },
  { id: 2, name: 'Alex', surname: 'test2', age: 20, passportId: 66 },
  { id: 3, name: 'John', surname: 'test2', age: 56, passportId: 123 },
  { id: 4, name: 'Bob', surname: 'test3', age: 10, passportId: 50 },
]

const createKey = index => {
  let str = ''
  Object.values(USERS[index]).map(value => {
    str += value + '__'
  })
  return str
}

const App = () => {
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0)

  const changeName = (id, newName) => {
    USERS = USERS.map(user => {
      if (user.id === id) {
        return {
          id: user.id,
          name: newName,
          surname: user.surname,
          age: user.age,
          passportId: user.passportId,
        }
      }

      return user
    })
    forceUpdate()
  }
  return (
    <div>
      {USERS.map((user, i) => (
        <UserName key={createKey(i)} userId={user.id} userName={user.name} userSurname={user.surname} userAge={user.age} changeName={changeName} />
      ))}
    </div>
  )
}

export { App }
