import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const AppWrapper: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppWrapper
