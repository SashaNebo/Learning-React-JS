import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ButtonCart from '../UI/buttons/ButtonCart'
import ButtonWishlist from '../UI/buttons/ButtonWishlist'
import { DataRequestType } from '../../types/storeTypes/request'

const Product: React.FC = () => {
  const { id } = useParams()
  const [item, setItem] = useState<Partial<DataRequestType>>({})
  const {title, price, category, sizes } = item

  useEffect(() => {
    axios.get(`https://65a28dd542ecd7d7f0a7d164.mockapi.io/items/${id}`)
      .then(response => response.data)
      .then((data) => setItem(data))
      .catch(err => alert(err))
  }, [])

  return (
    <div className='mt-10'>
      <div className='flex gap-x-12 mt-20'>
        <div className='flex justify-center items-center w-2/3 h-96 bg-sky-300 rounded-md'>
          <div className='text-6xl text-cyan-50'>{id}</div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-y-4'>
            <p className='text '>${price}</p>
            <p className='text'>{title}</p>
            <p className='text'>{category}</p>
          </div>

          <div>
            <p>Sizes</p>
            <div className='flex gap-x-2 mt-4'>
              {sizes?.map((size: string) => (
                <button key={size}>{ size}</button>
              ))}
            </div>
          </div>
          <div className='flex gap-x-4'>
            <ButtonCart>add to cart</ButtonCart>
            <ButtonWishlist />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
