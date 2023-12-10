import React, { useState } from 'react'
import './index.css'
import { BsEmojiGrin } from 'react-icons/bs'
import { BsEmojiKiss } from 'react-icons/bs'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { BsEmojiWink } from 'react-icons/bs'

function addToStorage({ target }) {
  let name = target.closest('.panel__button').dataset.name

  let emojiInfo = {
    name,
    id: Date.now(),
  }

  console.log(emojiInfo)
}

const Panel = () => {
  return (
    <div className='panel'>
      <div className='panel__container'>
        <button className='panel__button' data-name='grin' onClick={addToStorage}>
          <BsEmojiGrin className='panel__icon' />
        </button>
        <button className='panel__button' data-name='kiss' onClick={addToStorage}>
          <BsEmojiKiss className='panel__icon' />
        </button>
        <button className='panel__button' data-name='smile' onClick={addToStorage}>
          <BsEmojiSmileUpsideDown className='panel__icon' />
        </button>
        <button className='panel__button' data-name='wink' onClick={addToStorage}>
          <BsEmojiWink className='panel__icon' />
        </button>
      </div>
    </div>
  )
}

export { Panel }
