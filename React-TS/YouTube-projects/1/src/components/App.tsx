import { useState, useEffect, useRef } from 'react'
import TodoList from '../components/TotoList'
import { ITodo } from '../types/data'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') return addTodo()
  }

  const addTodo = () => {
    if (!value) return

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: value,
        complete: false,
      },
    ])

    setValue('')
  }

  const removeTodo = (id: number): void => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const toggleTodo = (id: number): void => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo
      })
    })
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <div>
        <input onChange={handleChange} onKeyDown={handleKeyDown} value={value} ref={inputRef} type='text' />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
