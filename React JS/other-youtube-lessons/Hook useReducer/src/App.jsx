import React, { useReducer } from 'react'
import { reducer } from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  const handleClick = (action, number) => {
    dispatch({
      type: action,
      payload: number,
    })
  }

  // const array = [...Array(5).keys()].map((_, i) => i + 1)
  // const array2 = [...Array(5).keys()].filter((_, i) => i < 3)
  // console.log(array)
  // console.log(array2)

  return (
    <div className='App'>
      <button onClick={() => handleClick('decrement', 2)}> -2 </button>
      <button onClick={() => handleClick('decrement', 1)}> -1 </button>
      <h1>{state.counter}</h1>
      <button onClick={() => handleClick('increment', 1)}> +1 </button>
      <button onClick={() => handleClick('increment', 2)}> +2 </button>
    </div>
  )
}

export default App
