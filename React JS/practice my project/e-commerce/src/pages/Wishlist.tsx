import React from 'react'

import ButtonCart from '../components/UI/buttons/ButtonCart'

const Wishlist: React.FC = () => {
  const wishData = [...new Array(10)]
  return (
    <div>
      <div className='mt-10 pb-5'>
        <div className='grid grid-cols-4 gap-4'>
          {wishData.map((_, i) => (
            <div
              key={i}
              className='min-h-40 flex justify-between flex-col p-5 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/80 hover:-translate-y-2 transition-transform'>
              <div className='text-large'>{`${i + 1}`}</div>
              <div className='flex-start ml-auto'>
                <ButtonCart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
