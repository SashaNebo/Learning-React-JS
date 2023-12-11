import React from 'react'
import { BsEmojiGrin } from 'react-icons/bs'
import { BsEmojiKiss } from 'react-icons/bs'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { BsEmojiWink } from 'react-icons/bs'

const Emoji = ({ name }) => {
  const getGrin = () => <BsEmojiGrin className='block__icon' />
  const getKiss = () => <BsEmojiKiss className='block__icon' />
  const getSmile = () => <BsEmojiSmileUpsideDown className='block__icon' />
  const getWink = () => <BsEmojiWink className='block__icon' />

  if (name === 'grin') return getGrin()
  if (name === 'kiss') return getKiss()
  if (name === 'smile') return getSmile()
  if (name === 'wink') return getWink()
}

export default Emoji
