import React from 'react'
import classes from './Modal.module.css'
import Form from '../form/Form'

const Modal = ({ setModal, modal, handleFormSubmit }) => {
  const rootClasses = [classes.modal]

  if (modal.vision) {
    rootClasses.push(classes.active)
  }

  return (
    <div onClick={() => setModal({ vision: false, formId: null, userId: null, name: '' })} className={rootClasses.join(' ')}>
      <div onClick={e => e.stopPropagation()}>
        <Form setModal={setModal} handleFormSubmit={handleFormSubmit} inputValue={modal.name} buttonName={modal.formId} />
      </div>
    </div>
  )
}

export default Modal
