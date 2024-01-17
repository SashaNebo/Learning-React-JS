import React from 'react'
import { InputType } from '../../../types/UITypes/UITypes'

const InputSearch: React.FC<InputType> = ({ ...props }) => {
  return <input {...props} className='p-2 bg-slate-300 text-gray-800 rounded-md' />
}

export default InputSearch
