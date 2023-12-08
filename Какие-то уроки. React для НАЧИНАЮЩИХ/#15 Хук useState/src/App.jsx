import React, { useState } from 'react'
import './index.css'
import { tab } from '@testing-library/user-event/dist/tab'

const App = () => {
  // const [isDark, setIsDark] = useState(false)

  // const onClickHandler = () => {
  //   // setIsDark(!isDark)
  //   setIsDark(value => !value)
  // }
  // return (
  //   <div className={isDark ? 'dark' : 'light'}>
  //     <button onClick={onClickHandler}>Swith Theme</button>
  //   </div>
  // )

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  // const [data, setData] = useState({ name: '', password: '' })

  // const onChangeName = ({ target }) => {
  //   // setName(target.value)
  //   setData({ name: target.value })
  // }

  // const onChangePassword = ({ target }) => {
  //   // setPassword(target.value)
  //   setData({ password: target.value })
  // }

  const [data, setData] = useState({ name: '', password: '' })
  const [data2, setData2] = useState({ name2: '', password2: '' })

  const handleSubmit = e => {
    e.preventDefault()

    setData2(e => ({
      name2: data.name,
      password2: data.password,
    }))

    document.querySelectorAll('input').forEach(input => (input.value = ''))
  }

  const handleName = ({ target }) => {
    setData(store => ({
      ...store,
      name: target.value,
    }))
  }

  const handlePassword = ({ target }) => {
    setData(store => ({
      ...store,
      password: target.value,
    }))
  }

  return (
    <div className='container'>
      <form className='flex' action='GET' onSubmit={handleSubmit}>
        <input type='text' placeholder='name' onChange={handleName} />
        <input type='password' placeholder='password' onChange={handlePassword} />
        <input type='submit' value='submit' />
        <p>Ваше имя: {data2.name2}</p>
        <p className=''>Ваш пароль: {data2.password2}</p>
      </form>
    </div>
  )
}

export { App }
