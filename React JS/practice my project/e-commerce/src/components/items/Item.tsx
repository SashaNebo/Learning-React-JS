import React from 'react'
import { Link } from 'react-router-dom'

import ButtonWishlist from '../UI/buttons/ButtonWishlist'
import ButtonCart from '../UI/buttons/ButtonCart'
import { DataRequestType } from '../../types/storeTypes/request'

const Item: React.FC<DataRequestType> = ({ ...itemData }) => {
  const { id, title, price, category, sizes } = itemData
  return (
    <Link to={`product/${id}`}>
      <div className='animation min-h-40 flex justify-between flex-col p-5 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/80 hover:-translate-y-2 transition-transform'>
        <div className='flex flex-col gap-y-4'>
          <div className='text-large'>{`${id}`}</div>
          <div className='font-bold text-white'>{price}</div>
          <div className='font-bold text-white'>{title}</div>
          <div className='font-bold text-white'>{category}</div>

          <div className='flex gap-x-4'>
            {sizes.map(size => (
              <div className='text' key={size}>
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-start gap-x-2 ml-auto'>
          <ButtonWishlist />
          <ButtonCart />
        </div>
      </div>
    </Link>
  )
}

export default Item
