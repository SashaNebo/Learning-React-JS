import React, { useState } from 'react'

const CategoryList: React.FC = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div onClick={() => setHidden(!hidden)} className='flex items-center relative'>
      <div className='p-3 bg-slate-200 cursor-pointer rounded-md'>Choose...</div>
      {hidden && (
        <ul className='absolute top-12 z-10 flex flex-col p-4 gap-y-4 rounded-md  bg-slate-300'>
          <li className='cursor-pointer'>Price</li>
          <li className='cursor-pointer'>Raiting</li>
          <li className='cursor-pointer'>Popular</li>
        </ul>
      )}
    </div>
  )
}

export default CategoryList
