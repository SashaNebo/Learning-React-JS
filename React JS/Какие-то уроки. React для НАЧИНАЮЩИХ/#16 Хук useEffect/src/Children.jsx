import React, { useEffect, useState } from 'react'

const Children = props => {
  const [delivery, setDelivery] = useState(false)
  // useEffect(() => {
  //   console.log('Otrisovka')

  //   return () => {
  //     console.log('Ydalilsya')
  //   }
  // }, [])

  useEffect(() => {
    props.count > 5 && setDelivery(true)
  }, [props.count])

  return (
    <h1>
      Children {props.count}
      {delivery && <p>Ohrenet!!! count bolshe 5</p>}
    </h1>
  )
}

export { Children }
