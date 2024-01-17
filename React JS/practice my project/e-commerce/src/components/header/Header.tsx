import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <div className='mt-10'>
      <h1 className='title'>Header</h1>
      <div className='flex gap-x-4 mt-4'>
        <Link to={'/profile'} className='link'>profile <span></span></Link>
        <Link to={'/wishlist'} className='link'>wishlist <span></span></Link>
        <Link to={'/cart'} className='link'> cart <span></span></Link>
        {pathname !== '/' && (<Link className='link' to={'/'}> home </Link>)}
      </div>
    </div>
  )
}

export default Header
