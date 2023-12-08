import React from 'react'
const arr = ['Apelsin', 'Cocos', 'Papaya']
let count = 0
const UserName = props => {
  return props.userAge > 20 ? (
    <p>
      {props.userName}
      <button onClick={f1}>Change Name</button>
    </p>
  ) : (
    <p>
      {props.userName} {props.userSurname}
    </p>
  )

  function f1() {
    if (count > 2) count = 0
    props.changeName(props.userId, arr[count])
    count++
  }
}

export { UserName }
