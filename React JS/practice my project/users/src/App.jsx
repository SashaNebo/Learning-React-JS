import React from 'react'
import './styles/App.css'
import Container from './components/container/Container'
import Header from './components/header/Header'
import Users from './components/users/Users'
import UserTop from './components/user/UserTop'
import User from './components/user/User'

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <Users>
          <UserTop />
          <User />
        </Users>
      </Container>
    </div>
  )
}

export default App
