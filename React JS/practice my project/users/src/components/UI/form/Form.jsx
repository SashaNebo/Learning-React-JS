import React from 'react'
import classes from './Form.module.css'

const Form = ({ setModal, buttonName, inputValue, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <input onChange={({ target }) => setModal(prevData => ({ ...prevData, name: target.value }))} className='input' type='text' value={inputValue} placeholder='name' maxLength={25} required />
      <button className='button' type='submit'>
        {buttonName}
      </button>
    </form>
  )
}

export default Form
