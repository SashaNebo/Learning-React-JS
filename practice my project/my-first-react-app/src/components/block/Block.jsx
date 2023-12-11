import React, { useState } from 'react'
import './index.css'
import Emoji from '../emoji/Emoji'

const Block = ({ data, setData }) => {
  const name = 'kiss'
  function f1({ target }) {
    const currentBlock = target.closest('.block')
    currentBlock.classList.add('block__remove')

    setTimeout(() => {
      setData(prev => {
        return prev.filter(el => el.id !== +currentBlock.id)
      })
    }, 1000)
  }

  return data.map(e => (
    <div style={{ background: `#${e.bg}` }} className='block' key={e.id} id={e.id} onClick={f1}>
      <Emoji fill={e.fill} name={e.name} />
    </div>
  ))
}

export { Block }
