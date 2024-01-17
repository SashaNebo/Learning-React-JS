import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { setCategory } from '../../store/slices/paramsSlice'
import { setScroll } from '../../store/slices/windowSlice'

const CategoryItem: React.FC<{ category: string }> = ({ category }) => {
  const dispatch = useAppDispatch()

  const handleCategory = (category: string) => {
    dispatch(setCategory(category))
    dispatch(setScroll(window.scrollY))
  }

  console.log()

  return (
    <li onClick={() => handleCategory(category)} className='cursor-pointer capitalize text'>
      {category}
    </li>
  )
}

export default CategoryItem
