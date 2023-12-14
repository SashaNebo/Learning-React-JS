import React from 'react'

const UserName = props => {
  console.log(props)
  return props.userAge > 20 ? (
    <p>
      {props.userName}
      <button>Change Name</button>
    </p>
  ) : (
    <p>
      {props.userName} {props.userSurname}
    </p>
  )
}

export { UserName }
