import React from 'react'
import { useSelector } from 'react-redux'

import Item from './Item'
import { selectorRequest } from '../../store/slices/requestSlice'

const ItemsList: React.FC = () => {
  const { data } = useSelector(selectorRequest)

  return (
    <div className='grid grid-cols-2 gap-4'>
      {data?.map(obj => (
        <Item {...obj} key={obj.id} />
      ))}
    </div>
  )
}

export default ItemsList
