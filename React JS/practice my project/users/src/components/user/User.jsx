import React from 'react'
import './user.css'

const arr = [1, 1, 1, 1, 1]

const User = () => {
  return arr.map((user, i) => (
    <div className='user'>
      <div>{++i}</div>
      <div>Name</div>
      <div>History</div>
      <div className='user__buttons'>
        <button className='button w-2/5'>Edit</button>
        <button className='button w-2/4'>Remove</button>
      </div>
    </div>
  ))
}

export default User
