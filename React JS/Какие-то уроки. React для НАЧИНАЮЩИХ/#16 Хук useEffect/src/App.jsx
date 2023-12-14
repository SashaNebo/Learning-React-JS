import React, { useState } from 'react'
import './index.css'
import { Children } from './Children'

const App = () => {
  const [state, setState] = useState(false)
  const [count, setCount] = useState(0)

  const onClickHandler = () => {
    setState(currentState => !currentState)
  }

  const countHandler = () => {
    setCount(value => ++value)
  }

  return (
    <div>
      <button onClick={countHandler}>+</button>
      <button onClick={onClickHandler}>Switch</button>
      {state && <Children count={count} />}
    </div>
  )
}

export { App }
