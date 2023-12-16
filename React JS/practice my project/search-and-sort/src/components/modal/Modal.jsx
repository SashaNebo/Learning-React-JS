import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ vision, createUser, setVision }) => {
  const [User, setUser] = useState({ name: '' })

  function addNewUser(e) {
    e.preventDefault()

    const newUser = {
      ...User,
      id: Date.now(),
    }

    createUser(newUser)
    setUser({ id: null, name: '' })
  }

  return (
    <div>
      <form onClick={() => setVision(prev => !prev)} className={`modal ${vision && 'active'}`}>
        <div className='modal__container' onClick={e => e.stopPropagation()}>
          <input onChange={({ target }) => setUser({ ...User, name: target.value })} type='text' value={User.name} required />
          <button onClick={addNewUser} className='modal__submit' type='submit'>
            create user
          </button>
        </div>
      </form>
    </div>
  )
}

export default Modal
