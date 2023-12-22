import React, { useMemo } from 'react'

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

// Hook -> usePagination() = useMemo

export const usePagination = totalPages => {
  const getPagesArray = useMemo(() => {
    return [...Array(totalPages).keys()].map(i => i + 1)
  }, [totalPages])

  return getPagesArray
}
