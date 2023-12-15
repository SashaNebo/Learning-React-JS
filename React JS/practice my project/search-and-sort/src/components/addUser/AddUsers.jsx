import React from 'react'
import './AddUser.css'

const AddUsers = ({ setVision }) => {
  return (
    <button onClick={() => setVision(prevStatus => !prevStatus)} className='button__add'>
      add user
    </button>
  )
}

export default AddUsers
