import React from 'react'

const ItemsList = ({ sectionProps, setSection }) => {
  const { setPage, store } = sectionProps

  const openItem = item => {
    setPage(() => ({ item, id: item }))
    setSection('item')
  }

  return (
    <div>
      <div className='flex justify-center items-center h-screen gap-4'>
        {store.map(item => (
          <div onClick={() => openItem(item)} key={item} className='p-10 bg-slate-500'>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemsList
