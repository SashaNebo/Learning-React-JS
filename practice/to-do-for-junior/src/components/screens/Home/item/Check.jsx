import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Check = ({ isCompleted }) => {
  return <div className='border-2 rounded-md border-pink-500 w-7 h-7'>{isCompleted && <FaCheck size={24} className='text-indigo-50' />}</div>
}

export default Check
