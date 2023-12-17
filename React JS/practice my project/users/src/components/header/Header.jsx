import React from 'react'
import './header.css'
import Filter from '../filter/Filter'

const Header = ({ setFilter, showModal }) => {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title self-center'>Users</h1>
        <button onClick={({ target }) => showModal(target)} className='header__invite button self-center justify-self-end' id='invite'>
          Invite
        </button>
        <Filter setFilter={setFilter} />
        <input onChange={({ target }) => setFilter(prevData => ({ ...prevData, query: target.value }))} className='search input justify-self-end text-start' type='text' placeholder='Search...' />
      </div>
    </div>
  )
}

export default Header
