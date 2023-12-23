import React, { useState } from 'react'
import { getSectionComponent } from './getSectionComponent'
import getSectionProps from '../../props/getSectionProps'

const SectionComponent = () => {
  const [section, setSection] = useState('itemsList')

  const SectionComponent = getSectionComponent(section)
  const sectionProps = getSectionProps(section)

  return (
    <div>
      <button className='m-4 p-5 bg-sky-800'>cart</button>
      <button className='m-4 p-5 bg-sky-800'>wishlist</button>
      <SectionComponent sectionProps={sectionProps} setSection={setSection} />
    </div>
  )
}

export default SectionComponent
