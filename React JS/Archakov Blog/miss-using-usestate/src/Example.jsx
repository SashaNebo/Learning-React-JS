import React, { useState } from 'react'

// 1. Хочешь предыдущее значение ? Используй callback функцию с аргументом в виде предыдущего значения
// 2. Не хочешь ошибок в "пустом" useState ? Ставь default случай
// 3. Данные обновляются ? Используй useState
// 4. Манипуляция над списками:
// 4.1.Хочешь обновить список ? Делай так: setState(...state, newState)
// 4.2. Хочешь удалить из списка элемент ? Делай так:
// 4.2.1. const cloneTasks = [...tasks]
// 4.2.2. cloneTasks.splice(${нужный индекс задачи}, 1)
// 4.2.3. setState(...state, cloneTasks)
// 4.3. Хочешь изменить элемент списка ? Делай так:
// 4.3.1. const formedTasks = tasks.map(task, i => { if (i === 1) { return { text: 'newText' } }} return task)
// 4.3.2. setState(...state, formedTasks)

const Example = () => {
  // const [count, setCount] = useState(10)
  // Example 1
  // React.useEffect(() => {
  //   setInterval(() => {
  //     // True
  //     // setCount(prev => prev - 1)
  //     // False
  //     // setCount(count - 1)
  //   }, 1000)
  // }, [])
  // Example 2
  // const onClick = () => {
  //   // True
  //   // setCount(prev => prev - 1)
  //   // setCount(prev => prev + 2)
  //   // False
  //   // setCount(count - 1)
  //   // setCount(count + 2)
  // }
  // return <h1 style={{ textAlign: 'center' }}>{count}</h1>
  // =================================
  // const url = 'https://jsonplaceholder.typicode.com/users'
  // Example 3
  // False (useState())
  // const [users, setUsers] = useState()
  // True (useState([]))
  // const [users, setUsers] = useState([])
  // React.useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setUsers(json))
  // }, [])
  // return (
  //   <ul>
  //     {users.map(obj => (
  //       <li key={obj.id}>{obj.name}</li>
  //     ))}
  //   </ul>
  // )
  // Example 3.2
  // const [users, setUsers] = useState()
  // React.useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setUsers(json))
  // }, [])
  // // if (!users) return null
  // return (
  //   <ul>
  //     {users?.map(obj => (
  //       <li key={obj.id}>{obj.name}</li>
  //     ))}
  //   </ul>
  // )
  // =================================
  // Example 4
  /* Когда нужно хранить данные в useState или использовать useState, а когда этого делать не нужно и переменную выносить за компонент? */
  /*
  Если данные планируется изменять или рендерить тогда лучше хранить в useState и использовать useState. Если данные не планируют изменяться или рендерить, тогда лучше создать отдельную переменную и там хранить данные, при этом можно вынести за компонент.
  */
  // =================================
  // Example 5

  const [tasks, setTasks] = React.useState([{ text: 'Test task' }])

  const onClickAdd = () => {
    const text = prompt('Text task')
    // True
    setTasks([...tasks, { text }])

    // False
    // setTasks(prevTasks => prevTasks.push(text))
  }

  const onClickEdit = index => {
    const text = prompt('New Text')

    setTasks(
      tasks.map((obj, i) => {
        if (index === i) {
          return {
            ...obj,
            text: text,
          }
        }
        return obj
      })
    )
  }

  const onClickRemove = index => {
    // True
    setTasks(tasks.filter((_, i) => i !== index))

    // False
    // setTasks(tasks.splice(index, 1))
  }

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task.text}
            <button onClick={() => onClickEdit(i)}>Edit</button>
            <button onClick={() => onClickRemove(i)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={onClickAdd}>Add</button>
    </div>
  )
}

export default Example
