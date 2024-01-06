import React from 'react'
import TodoItem from './TodoItem'
import { ITodo } from '../types/data'

interface ITodoListProps {
  items: ITodo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TotoList: React.FC<ITodoListProps> = props => {
  const { items, removeTodo, toggleTodo } = props
  return (
    <div>
      {items.map(todo => (
        <TodoItem {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} key={todo.id} />
      ))}
    </div>
  )
}

export default TotoList
