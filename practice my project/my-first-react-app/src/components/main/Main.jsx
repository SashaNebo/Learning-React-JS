import React from 'react'
import './index.css'
import { Block } from '../block/Block'

const Main = () => {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__content'>
          <Block />
        </div>
      </div>
    </main>
  )
}

export default Main
