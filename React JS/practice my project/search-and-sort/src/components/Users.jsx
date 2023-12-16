import React, { useState, useEffect } from 'react'
import AddUsers from './addUser/AddUsers'
import Modal from './modal/Modal'

const Users = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [Users, setUsers] = useState([])
  const [filter, setFilter] = useState({ query: '', key: '' })
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [editUser, setEditUser] = useState({ name: '', id: null })

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

  function createUser(newUser) {
    setUsers(prevUsers => [...prevUsers, newUser])
    setModal(prevStatus => !prevStatus)
  }

  // Remove Edit

  function removeUser(id) {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id)
    })
  }

  function userInfo(userId) {
    setModal2(true)
    setEditUser({ ...editUser, id: userId })
  }

  function editUserInfo(e) {
    e.preventDefault()

    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === editUser.id) {
          return { ...user, name: editUser.name }
        }
        return user
      })
    })

    setEditUser({ name: '', id: null })
    setModal2(prevStatus => !prevStatus)
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
      {sortedUsers()?.map((user, i) => (
        <p key={user.id} className='mt-5'>
          {++i} - {user.name} - {user.id}
          <button onClick={() => removeUser(user.id)} className=' bg-lime-600 ml-8'>
            delete
          </button>
          <button onClick={() => userInfo(user.id)} className=' bg-sky-500 ml-8'>
            edit
          </button>
        </p>
      ))}
      <Modal setVision={setModal} createUser={createUser} vision={modal} />
      <div onClick={() => setModal2(false)} className={`modal__2 ${modal2 && 'active'}`}>
        <form onClick={e => e.stopPropagation()} className='modal__container'>
          <input onInput={({ target }) => setEditUser({ ...editUser, name: target.value })} value={editUser.name} type='text' required />
          <button onClick={editUserInfo} className='modal__submit' type='submit'>
            edit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Users
