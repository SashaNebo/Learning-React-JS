import React from 'react'
import useInput from '../hooks/useInput'

const Input = () => {
  const username = useInput('')
  const password = useInput('')

  return (
    <>
      <h1>{username.value}</h1>
      <h2>{password.value}</h2>
      <div className='App'>
        <input {...username} type='text' placeholder='username' />
        <input {...password} type='text' placeholder='password' />
        <button onClick={() => console.log(username.value, password.value)}>Show value</button>
      </div>
    </>
  )
}

export default Input
