import React from 'react'
const Item = ({ sectionProps, setSection }) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className=' bg-orange-100' onClick={() => setSection('itemsList')}>
        back
      </button>
      <h1 className='p-10 bg-slate-500'>{sectionProps.page.item}</h1>
    </div>
  )
}

export default Item
