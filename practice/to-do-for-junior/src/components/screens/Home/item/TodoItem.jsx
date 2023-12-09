import React from 'react'
import Check from './Check'
import { FaDeleteLeft } from 'react-icons/fa6'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='flex items-center gap-x-5 mb-6 rounded-xl bg-gray-800 p-4 cursor-pointer w-4/6'>
      <Check isCompleted={todo.isCompleted} />
      <span className='flex items-center justify-between w-full'>
        <span onClick={() => changeTodo(todo.id)} className={todo.isCompleted ? 'line-through text-cyan-600 text-lg' : 'text-lg'}>
          {todo.title}
        </span>
        <button onClick={() => removeTodo(todo.id)} className='p-1 hover:text-fuchsia-800'>
          <FaDeleteLeft size={26} className='text-emerald-5' />
        </button>
      </span>
    </div>
  )
}

export default TodoItem
