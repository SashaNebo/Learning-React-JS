import React, { useState } from 'react'
import { Main } from './components/main/Main'
import { Block } from './components/block/Block'
import { Panel } from './components/panel/Panel'

const App = () => {
  const [data, setData] = useState([])

  return (
    <div className='w-full h-screen'>
      <Main>
        <Block data={data} setData={setData} />
      </Main>
      <Panel setData={setData} />
    </div>
  )
}

export default App
