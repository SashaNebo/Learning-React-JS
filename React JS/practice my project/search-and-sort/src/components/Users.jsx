import React, { useState, useEffect } from 'react'
import AddUsers from './addUser/AddUsers'
import Modal from './modal/Modal'

const Users = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [Users, setUsers] = useState([])
  const [filter, setFilter] = useState({ query: '', key: '' })
  const [modal, setModal] = useState(false)

  const requestData = new Promise((resolve, reject) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })

  useEffect(() => {
    requestData.then(data => setUsers(data))
  }, [])

  function sortedUsers() {
    if (!filter.query) return filteredUsers()

    return filteredUsers().filter(user => {
      return user.name.toLowerCase().includes(filter.query.toLowerCase())
    })
  }

  function filteredUsers() {
    if (!filter.key) return Users

    const sortingByDefault = [...Users].sort((a, b) => a.id < b.id && -1)
    const sortingByName = [...Users].sort((a, b) => a.name < b.name && -1)

    const sortingList = {
      default: sortingByDefault,
      name: sortingByName,
    }

    return sortingList[filter.key]
  }

  useEffect(() => {
    console.log('Данные изменились, нужно перерисовать')
  }, [Users, filter.query, filter.key])

  // Modal

  function createUser(e) {
    e.preventDefault()
    setModal(prevStatus => !prevStatus)
    console.log(`Данные получены: ${e.target.value}`)
    console.log(e.target.value)
  }

  return (
    <div className=' m-4'>
      <div>
        <input onInput={({ target }) => setFilter({ ...filter, query: target.value })} placeholder='search' className='bg-slate-500 p-2' type='search' />
        <select onChange={({ target }) => setFilter({ ...filter, key: target.value })} className='bg-slate-500 ml-2 mr-2' name='filter'>
          <option value='default'>Default</option>
          <option value='name'>Name</option>
        </select>

        <AddUsers setVision={setModal} />
      </div>
      {sortedUsers()?.map(user => (
        <p key={user.id}>
          {user.id} - {user.name}
        </p>
      ))}
      <Modal setVision={setModal} createUser={createUser} vision={modal} />
    </div>
  )
}

export default Users
