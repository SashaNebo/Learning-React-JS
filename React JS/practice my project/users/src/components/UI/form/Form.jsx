import React from 'react'
import classes from './Form.module.css'

const Form = () => {
  return (
    <form className={classes.form}>
      <input className='input' type='text' />
      <button className='button'>okey</button>
    </form>
  )
}

export default Form
