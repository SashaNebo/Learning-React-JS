import React from 'react'
import './users.css'
import UserTop from '../user/UserTop'
import User from '../user/User'
import UsersNotFound from '../user/UsersNotFound'

const Users = ({ sortedUsers, showModal, removeUser }) => {
  return (
    <div className='users'>
      {!sortedUsers.length && <UsersNotFound />}
      <div className='users__content'>
        <UserTop />
        {sortedUsers?.map((user, i) => (
          <User removeUser={removeUser} showModal={showModal} userName={user.name} userId={user.id} userNumber={user.number} userIndex={i} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default Users
