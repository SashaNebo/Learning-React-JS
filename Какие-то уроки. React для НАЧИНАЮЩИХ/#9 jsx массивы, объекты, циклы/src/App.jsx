import React from 'react'
import './index.css'

const App = () => {
  const array = [{ hello: 'Lublu' }, { hello: 'sebya' }]

  const arrayReactElements = []

  // for (let i = 0; i < array.length; i++) {
  //   const obj = array[i]

  //   arrayReactElements.push(<h1>{obj.hello}</h1>)
  // }

  // array.forEach(obj => {
  //   arrayReactElements.push(<button>{obj.hello}</button>)
  // })

  // const result = array.map(obj => {
  //   return (
  //     <div className='hello'>
  //       <h2>{obj.hello}</h2>
  //     </div>
  //   )
  // })

  console.log(array)
  console.log(arrayReactElements)

  return (
    <div>
      {array.map(obj => {
        return (
          <div className='hello2'>
            <h2>{obj.hello}</h2>
          </div>
        )
      })}
    </div>
  )
}

export { App }
