import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ id: null, title: 'Default Title', body: 'Default Body' })

  const addNewPost = e => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Date.now(),
    }

    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type='text' placeholder='Name post' />
      <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type='text' placeholder='Description post' />
      {/* Неуправляемый / Неконтролируемый компонент */}
      {/* <MyInput ref={bodyInputRef} type='text' placeholder='Description post' /> */}
      <MyButton onClick={addNewPost} type='sybmit'>
        Создать пост
      </MyButton>
    </form>
  )
}

export default PostForm
