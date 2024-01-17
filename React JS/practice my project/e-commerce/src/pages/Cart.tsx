import React from 'react'
import ButtonWishlist from '../components/UI/buttons//ButtonWishlist'
import ButtonRemove from '../components/UI/buttons/ButtonRemove'

const Cart: React.FC = () => {
  const cartData = [...new Array(4)]
  return (
    <div className='mt-10'>
      <div>
        <div className='mt-10'>
          <div className='text-large'>Your Bag</div>
          <div className='text-large mt-4'>Total: 2 items $180</div>
          <div className='flex gap-y-3 flex-col mt-10 pb-10'>
            {cartData.map((_, i) => (
              <div key={i} className='flex gap-x-6 p-4 bg-cyan-500 shadow-lg shadow-cyan-500/50'>
                <div className='w-1/4'>
                  <div className='flex justify-center text-large h-32 items-center bg-slate-100 rounded-md'>
                    {i + 1}
                  </div>
                </div>
                <div className='w-3/4 flex justify-between relative'>
                  <div className='flex justify-between flex-col'>
                    <div>
                      <span className='pr-2 text'>name</span>
                      <span className='text'>$55</span>
                    </div>
                    <div className='text'>category</div>
                    <div>
                      <span className='pr-2 text'>2 items</span>
                      <span className='text'>$110</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-x-2 mt-auto'>
                    <button>minus</button>
                    <span className='text text-xl'>0</span>
                    <button>plus</button>
                  </div>
                  <div className='absolute right-0'>
                    <div className='flex gap-x-2'>
                      <ButtonWishlist />
                      <ButtonRemove />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
