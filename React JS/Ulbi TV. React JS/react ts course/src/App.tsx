import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import UserPage from './components/UserPage'
import TodoPage from './components/TodoPage'
import ExamplePage from './components/ExamplePage'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
        <Link to={'/users'}>Users</Link>
        <Link to={'/todos'}>Todo List</Link>
        <Link to={'/'}>Home</Link>
      </div>
      <Routes>
        <Route path='/' element={<ExamplePage />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/todos' element={<TodoPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
