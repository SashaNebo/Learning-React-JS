import React, { ChangeEvent } from 'react'

import CategoryList from '../category/CategoryList'
import InputSearch from '../UI/inputs/InputSearch'
import ItemsList from '../items/ItemsList'
import Pagination from '../pagination/Pagination'
import { setSearch } from '../../store/slices/paramsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { search } = useAppSelector(state => state.params)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <main>
      <div className='flex justify-end items-center gap-x-3 mb-5'>
        <CategoryList />
        <InputSearch
          onChange={e => handleSearch(e)}
          value={search}
          placeholder='Search...'
          type='text'
        />
      </div>
      <ItemsList />
      <div className='mt-14'>
        <Pagination />
      </div>
    </main>
  )
}

export default Main
