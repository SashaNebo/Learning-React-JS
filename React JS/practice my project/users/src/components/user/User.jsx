import React from 'react'
import './user.css'

const User = ({ showModal, removeUser, userName, userId, userNumber, userIndex }) => {
  return (
    <div className='user'>
      <div className='user__index'>{++userIndex}</div>
      <div className='user__name'>{userName}</div>
      <div className='user__number'>{userNumber}</div>
      <div className='user__buttons'>
        <button onClick={({ target }) => showModal(target, userId)} className='button w-2/5' id='edit'>
          Edit
        </button>
        <button onClick={() => removeUser(userId)} className='button w-2/4'>
          Remove
        </button>
      </div>
    </div>
  )
}

export default User
