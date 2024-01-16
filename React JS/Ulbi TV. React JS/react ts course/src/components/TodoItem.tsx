import React from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  return (
    <div>
      <h1>
        {todo.id}. {todo.title}
      </h1>
      <input type='checkbox' checked={todo.completed} />
      <hr />
    </div>
  )
}

export default TodoItem
