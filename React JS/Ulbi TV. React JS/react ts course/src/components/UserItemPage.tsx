import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { IUser } from '../types/types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface UserItemPageParams {
  id: string
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  useEffect(() => {
    fetchUser()
  }, [])
  

  const params = useParams<UserItemPageParams>()

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <Link to={'/users'}>BACK</Link>
      <h1>Page user {user?.name}</h1>
      <div>{ user?.email}</div>
    </div>
  )
}

export default UserItemPage
