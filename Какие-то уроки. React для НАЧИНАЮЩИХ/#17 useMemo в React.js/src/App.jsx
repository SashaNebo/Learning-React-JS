import React, { useMemo } from 'react'
import './index.css'

const users = [
  { name: 'Alex', age: 20, address: 'Ylitsya neizvestnya' },
  { name: 'Alex', age: 20, address: 'Ylitsya neizvestnya' },
  { name: 'Alex', age: 20, address: 'Ylitsya neizvestnya' },
  { name: 'Alex', age: 20, address: 'Ylitsya neizvestnya' },
]

const App = () => {
  const calcUsers = useMemo(() => {
    const users2 = users.map((userInfo, index) => {
      return `${userInfo.name} ${index + 1}`
    })

    return users2
  }, [])
  return (
    <div>
      {calcUsers.map(user => (
        <div>{user}</div>
      ))}
    </div>
  )
}
export { App }
