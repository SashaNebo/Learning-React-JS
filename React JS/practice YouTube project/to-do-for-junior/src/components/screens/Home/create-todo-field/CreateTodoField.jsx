import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addToDo = title => {
    setTodos(prev => [
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
      ...prev,
    ])
    setTitle('')
  }

  return (
    <div>
      <input
        placeholder='Add a task'
        className=' bg-gray-800 text-sky-300 p-4 mt-4 max-w-2xl rounded-md'
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyUp={e => e.key === 'Enter' && title !== '' && addToDo(title)}
      />
    </div>
  )
}

export default CreateTodoField
