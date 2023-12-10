import React, { useState } from 'react'
import './index.css'
import { BsEmojiKiss } from 'react-icons/bs'

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16)
//   document.body.style.backgroundColor = '#' + randomColor
//   color.innerHTML = '#' + randomColor
// }

const Block = ({ data, setData }) => {
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16)

  function f1({ target }) {
    const currentBlock = target.closest('.block')
    currentBlock.classList.add('block__remove')

    setTimeout(() => {
      setData(prev => {
        return prev.filter(el => el.id !== +currentBlock.id)
      })
    }, 1000)
  }

  return data.map((e, i) => (
    <div className='block' key={e.id} id={e.id} onClick={f1}>
      {<BsEmojiKiss className='block__icon' />}
    </div>
  ))
}

/* <div className='block'>{<BsEmojiKiss className='block__icon' />}</div> */
// style={{ background: `#${randomColor()}` }}
export { Block }
