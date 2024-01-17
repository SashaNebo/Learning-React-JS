import React, { PropsWithChildren } from 'react'
import { FaOpencart } from 'react-icons/fa'
import { ButtonType } from '../../../types/UITypes/UITypes'

const ButtonCart: React.FC<PropsWithChildren<ButtonType>> = ({ children, ...props }) => {

  return (
    <button {...props} className='bg-stone-950 flex gap-x-2'>
        {children}
        <FaOpencart />
    </button>
  )
}

export default ButtonCart
