import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
  { id: 98080486, title: 'Finish the assay', isCompleted: false },
  { id: 14990339, title: 'Read next chapter', isCompleted: false },
  { id: 42518242, title: 'Send the finished asigment', isCompleted: false },
  { id: 30984007, title: 'Finish the assay 2', isCompleted: false },
]

const Home = () => {
  let [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => {
    setTodos([...todos.filter(t => id !== t.id)])
  }

  // window.addToDo = addToDo

  return (
    <div className='text-white w-4/5 mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-2xl font-bold text-center mb-8'>To do for Junior</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home
