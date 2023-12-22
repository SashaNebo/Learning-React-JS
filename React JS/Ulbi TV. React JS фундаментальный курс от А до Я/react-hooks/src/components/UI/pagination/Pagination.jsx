import React, { useMemo } from 'react'
import { usePagination } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages)

  return (
    <div className='page__wrapper'>
      {pagesArray.map(p => (
        <span onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'} key={p}>
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
