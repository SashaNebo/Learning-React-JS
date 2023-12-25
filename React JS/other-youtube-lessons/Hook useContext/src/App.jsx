import React from 'react'
import Main from './components/main/Main'
import { Context } from './Context'

const App = () => {
  const itemContent = 'Item content'

  return (
    <div className='App'>
      <Context.Provider value={itemContent}>
        <Main />
      </Context.Provider>
    </div>
  )
}

export default App
