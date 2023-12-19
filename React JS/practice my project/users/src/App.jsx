import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Container from './components/container/Container'
import Header from './components/header/Header'
import { staticUsers } from './components/users/staticUsers'
import Users from './components/users/Users'
import Modal from './components/UI/modal/Modal'

function App() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ query: '', key: '' })
  const [modal, setModal] = useState({ vision: false, formId: null, userId: null, name: '' })

  useEffect(() => {
    setUsers(staticUsers)
  }, [])

  function sortedUsers() {
    if (!filter.query) return filteredUsers()

    return filteredUsers().filter(user => {
      return user.name.toLowerCase().includes(filter.query.toLowerCase())
    })
  }

  function filteredUsers() {
    if (!filter.key) return users

    const sortingByName = () => [...users].sort((a, b) => a.name < b.name && -1)
    const sortingByNumberHigh = () => [...users].sort((a, b) => b.number - a.number)
    const sortingByDefault = () => [...users].sort((a, b) => a.number - b.number)

    const sortingList = {
      name: sortingByName,
      numberHigh: sortingByNumberHigh,
      default: sortingByDefault,
    }

    return sortingList[filter.key]()
  }

  function showModal(target, id) {
    setModal({ vision: true, formId: target.id, userId: id || null, name: '' })
  }

  function getNewNumber() {
    const max = users.reduce((acc, user) => {
      return user.number > acc ? (acc = user.number) : 0
    }, 0)

    return max + 1
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    if (modal.formId === 'invite') return inviteUser()
    if (modal.formId === 'edit') return editUser()
  }

  function inviteUser() {
    const newUser = {
      name: modal.name,
      id: Date.now(),
      number: getNewNumber(),
    }

    setUsers(prevUsers => [...prevUsers, newUser])
    setModal({ vision: false, formId: null, userId: null, name: '' })
  }

  function removeUser(userId) {
    setUsers(prevUsers => {
      return prevUsers.filter(user => {
        return user.id !== userId
      })
    })
  }

  function editUser() {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        return user.id === modal.userId ? { ...user, name: modal.name } : user
      })
    })

    setModal({ vision: false, formId: null, userId: null, name: '' })
  }

  return (
    <div className='App'>
      <Container>
        <Header setFilter={setFilter} showModal={showModal} />
        <Users sortedUsers={sortedUsers} showModal={showModal} removeUser={removeUser} />
        <Modal setModal={setModal} modal={modal} handleFormSubmit={handleFormSubmit} />
      </Container>
    </div>
  )
}

export default App
