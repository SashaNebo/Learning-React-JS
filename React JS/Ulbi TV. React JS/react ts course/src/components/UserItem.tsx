import React from 'react'
import { IUser } from '../types/types'
import { Link } from 'react-router-dom'
interface UserItemProps {
  user: IUser
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        padding: 15,
        border: '1px solid #000',
      }}>
      <Link to={`/users/${user.id}`}>
        {user.id} - {user.name}, lives in city {user.address.city}, on street {user.address.street}
      </Link>
    </div>
  )
}

export default UserItem
