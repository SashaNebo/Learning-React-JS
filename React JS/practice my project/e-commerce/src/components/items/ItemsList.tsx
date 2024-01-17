import React from 'react'

import Item from './Item'
import { DataRequestType } from '../../types/storeTypes/request'
import getFilteredData from '../../helpers/filteredData'
import { useAppSelector } from '../../hooks/redux'

const ItemsList: React.FC = () => {
  const { data } = useAppSelector(state => state.request)
  const { category, search } = useAppSelector(state => state.params)
  const filteredData: DataRequestType[] = getFilteredData(data, category, search)
  
  return (
    <div className='grid grid-cols-2 gap-4'>
      {filteredData?.map(obj => (
        <Item {...obj} key={obj.id} />
      ))}
    </div>
  )
}

export default ItemsList
