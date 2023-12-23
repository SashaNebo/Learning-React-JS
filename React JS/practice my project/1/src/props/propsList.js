import React, { useState } from 'react'

export const propsList = () => {
  const [store, setStore] = useState([1, 2, 3])
  const [page, setPage] = useState({ item: null, id: null })

  const propsAll = {
    propsStore: {
      store,
      setStore,
    },

    propsPage: {
      page,
      setPage,
    },
  }

  return propsAll
}
