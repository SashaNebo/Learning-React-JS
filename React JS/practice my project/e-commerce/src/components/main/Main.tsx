import React from 'react'

import CategoryList from '../category/CategoryList'
import InputSearch from '../UI/inputs/InputSearch'
import ItemsList from '../items/ItemsList'
import Pagination from '../pagination/Pagination'

const Main: React.FC = () => {
  return (
    <main>
      <div className='flex justify-end items-center gap-x-3 mb-5'>
        <CategoryList />
        <InputSearch placeholder='Search...' type='text' />
      </div>
      <ItemsList />
      <div className='mt-14'>
        <Pagination />
      </div>
    </main>
  )
}

export default Main
