import React, { useState } from 'react'
import CategoryItem from './CategoryItem'
import { useAppSelector } from '../../hooks/redux'


const CategoryList: React.FC = () => {
  
  const { category } = useAppSelector(state => state.params)
  const categoryList: string[] = ['price', 'raiting', 'default']
  const [hidden, setHidden] = useState(false)

  return (
    <div onClick={() => setHidden(!hidden)} className='flex items-center relative'>
      <div className='p-3 bg-slate-200 cursor-pointer rounded-md text'>{ category }</div>
      {hidden && (
        <ul className='absolute top-12 z-10 flex flex-col p-4 gap-y-4 rounded-md  bg-slate-300'>
          {categoryList.map(category => (
            <CategoryItem category={category} key={category} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CategoryList
