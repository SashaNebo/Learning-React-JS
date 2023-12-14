import React from 'react'
import './index.css'

const Main = ({ children }) => {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__content'>{children}</div>
      </div>
    </main>
  )
}

export { Main }
