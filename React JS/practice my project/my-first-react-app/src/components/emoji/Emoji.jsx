import React from 'react'
import { BsEmojiGrin } from 'react-icons/bs'
import { BsEmojiKiss } from 'react-icons/bs'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { BsEmojiWink } from 'react-icons/bs'

const names = {
  grin: BsEmojiGrin,
  kiss: BsEmojiKiss,
  smile: BsEmojiSmileUpsideDown,
  wink: BsEmojiWink,
}

const Emoji = ({ name }) => {
  const EmojiComponent = names[name]
  return <EmojiComponent className='block__icon' />
}

export default Emoji
