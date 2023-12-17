import React, { useState } from 'react'
import './filter.css'
import FilterList from './filterList/FilterList'

const Filter = ({ setFilter }) => {
  const [filterTitle, setFilterTitle] = useState('')

  function showFilter({ target }) {
    const filterSelect = target.closest('.filter').children[1]
    filterSelect.classList.toggle('active')
  }

  return (
    <div onClick={showFilter} className='filter self-center'>
      <div className='filter__title d-text'>Filter by {filterTitle}</div>
      <FilterList setFilterTitle={setFilterTitle} showFilter={showFilter} setFilter={setFilter} />
    </div>
  )
}

export default Filter
