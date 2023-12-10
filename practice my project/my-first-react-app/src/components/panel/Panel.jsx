import React, { useState } from 'react'
import './index.css'
import { BsEmojiGrin } from 'react-icons/bs'
import { BsEmojiKiss } from 'react-icons/bs'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { BsEmojiWink } from 'react-icons/bs'

const Panel = ({ setData }) => {
  function renderEmoji({ target }) {
    const name = target.closest('.panel__button').dataset.name

    setData(prev => [
      ...prev,
      {
        name,
        id: Date.now(),
      },
    ])
  }

  return (
    <div className='panel'>
      <div className='panel__container'>
        <button className='panel__button' data-name='grin' onClick={renderEmoji}>
          <BsEmojiGrin className='panel__icon' />
        </button>
        <button className='panel__button' data-name='kiss' onClick={renderEmoji}>
          <BsEmojiKiss className='panel__icon' />
        </button>
        <button className='panel__button' data-name='smile' onClick={renderEmoji}>
          <BsEmojiSmileUpsideDown className='panel__icon' />
        </button>
        <button className='panel__button' data-name='wink' onClick={renderEmoji}>
          <BsEmojiWink className='panel__icon' />
        </button>
      </div>
    </div>
  )
}

export { Panel }
