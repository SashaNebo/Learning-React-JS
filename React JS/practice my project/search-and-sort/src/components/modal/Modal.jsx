import React from 'react'
import './Modal.css'

const Modal = ({ vision, createUser, setVision }) => {
  return (
    <form onClick={() => setVision(prev => !prev)} className={`modal ${vision && 'active'}`}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        <input type='text' />
        <input onClick={e => createUser(e)} className='modal__submit' type='submit' />
      </div>
    </form>
  )
}

export default Modal
