import React from 'react'
import './users.css'

const Users = ({ children }) => {
  return (
    <div className='users'>
      <div className='users__content'>{children}</div>
    </div>
  )
}

export default Users
