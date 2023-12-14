import React from 'react'
import './index.css'
import Author from '../Author'

const Poster = props => {
  return (
    <div className='poster shadow'>
      <img className='poster-img' src={props.img} alt={props.name} />
      <h2 className='poster-h2'>{props.name}</h2>
      {typeof props.description === 'string' && <h4 className='poster-h4'>{props.description}</h4>}
      {props.author && <Author name={props.author.name} />}
    </div>
  )
}
export default Poster
