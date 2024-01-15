import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useAction'

const TodoList: React.FC = () => {
  const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]


  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <hr />
      {todos.map(todo => (
        <h1 key={todo.id}>
          {todo.id} - {todo.title}
        </h1>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {pages.map(p => (
          <h3 onClick={() => setTodoPage(p)}
            style={{
              border: p !== page ? '1px solid black' : '5px solid black',
              padding: '5px 10px',
            }}>
            {p}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default TodoList
