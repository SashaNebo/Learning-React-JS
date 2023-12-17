import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title self-center'>Users</h1>
        <button className='header__invite button self-center justify-self-end'>Invite</button>
        <div className='filter self-center'>
          <div className='filter__title d-text'>Filter by</div>
          <ul className='filter__select'>
            <li>
              <div className='filter__select-item d-text'>Name</div>
            </li>
            <li>
              <div className='filter__select-item d-text'>Number High</div>
            </li>
            <li>
              <div className='filter__select-item d-text'>Number Low</div>
            </li>
          </ul>
        </div>
        <input className='search input justify-self-end text-start' type='text' placeholder='Search...' />
      </div>
    </div>
  )
}

export default Header
