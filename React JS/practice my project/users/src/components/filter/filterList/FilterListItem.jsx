import React from 'react'

const FilterListItem = ({ writeFilterKey, conditionId, conditionText }) => {
  return (
    <li onClick={({ target }) => writeFilterKey(target)}>
      <div className='filter__select-item d-text' id={conditionId}>
        {conditionText}
      </div>
    </li>
  )
}

export default FilterListItem
