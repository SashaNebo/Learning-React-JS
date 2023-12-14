import React from 'react'
import './index.css'
import Emoji from '../emoji/Emoji'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Block = ({ data, setData }) => {
  function removeEmoji({ target }) {
    const currentBlock = target.closest('.block')
    currentBlock.classList.add('block__remove')

    setTimeout(() => {
      setData(prev => {
        return prev.filter(el => el.id !== +currentBlock.id)
      })
    }, 1000)
  }

  return data.map(({ name, id, bg }) => (
    <div style={{ background: `#${bg}` }} className='block' key={id} id={id} onClick={removeEmoji}>
      <Emoji name={name} />
    </div>
  ))
}

export { Block }
