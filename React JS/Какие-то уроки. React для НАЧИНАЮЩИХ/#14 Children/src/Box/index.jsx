import React from 'react'
import './index.css'

const Box = props => {
  console.log(props)
  return <div className='box'>{props.children}</div>
}

export default Box
