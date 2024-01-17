import React from 'react'
import { TbHeartCode } from 'react-icons/tb'

const ButtonWishlist: React.FC = () => {
  return (
    <button className='bg-red-400 hover:bg-red-500'>
      <TbHeartCode />
    </button>
  )
}

export default ButtonWishlist
