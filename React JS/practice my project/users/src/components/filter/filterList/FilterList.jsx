import React from 'react'
import FilterListItem from './FilterListItem'

const FilterList = ({ setFilter, setFilterTitle, showFilter }) => {
  const conditionsFiltering = [
    { id: 'name', text: 'name' },
    { id: 'numberHigh', text: 'number high' },
    { id: 'default', text: 'default' },
  ]

  function writeFilterKey(target) {
    const filterKey = target.id
    setFilter(prevData => ({ ...prevData, key: filterKey }))
    showFilter({ target })
    changeFilterTitle(target.id)
  }

  function changeFilterTitle(filterId) {
    conditionsFiltering.forEach(condition => {
      condition.id === filterId && setFilterTitle(condition.text)
    })
  }

  return (
    <ul onClick={e => e.stopPropagation()} className='filter__select'>
      {conditionsFiltering.map(condition => (
        <FilterListItem writeFilterKey={writeFilterKey} conditionId={condition.id} conditionText={condition.text} key={condition.id} />
      ))}
    </ul>
  )
}

export default FilterList
