import React, { useState, useEffect } from 'react'

const Users = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [staticUsers, setStaticUsers] = useState([])
  const [adaptiveUsers, setAdaptiveUsers] = useState([])

  const requestData = new Promise((resolve, reject) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
  })

  useEffect(() => {
    requestData.then(data => setStaticUsers(data))
    requestData.then(data => setAdaptiveUsers(data))
  }, [])

  function searchUsers({ value }) {
    if (value === '') return setAdaptiveUsers([...staticUsers])

    setAdaptiveUsers(() => {
      return [...staticUsers].filter(user => {
        return user.name.toLowerCase().includes(value.toLowerCase())
      })
    })
  }

  function filteredUsers(key) {
    setAdaptiveUsers(prevUsers => {
      const sortingByDefault = [...prevUsers].sort((a, b) => a.id < b.id && -1)
      const sortingByName = [...prevUsers].sort((a, b) => a.name < b.name && -1)

      const sortingList = {
        default: sortingByDefault,
        name: sortingByName,
      }
      return sortingList[key]
    })
  }

  return (
    <div className=' m-4'>
      <div>
        <input onInput={({ target }) => searchUsers(target)} placeholder='search' className='bg-slate-500 p-2' type='search' />
        <select onChange={({ target }) => filteredUsers(target.value)} className='bg-slate-500 ml-2' name='filter'>
          <option value='default'>Default</option>
          <option value='name'>Name</option>
        </select>
      </div>
      {adaptiveUsers?.map(user => (
        <p key={user.id}>
          {user.id} - {user.name}
        </p>
      ))}
    </div>
  )
}

export default Users
