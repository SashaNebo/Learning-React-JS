import React, { useContext } from 'react'
import { Context } from '../../Context'

const Item = () => {
  const context = useContext(Context)

  return <div>{context}</div>
}

export default Item
