import React, {useState, useEffect} from 'react'
import axios from 'axios'

import List from './List'
import UserItem from './UserItem'
import { IUser } from '../types/types'

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />
}

export default UserPage
