import React, { useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - язык программирования' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  return (
    <div className='App'>
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '40px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList setPosts={setPosts} posts={sortedAndSearchedPosts} title={'Posts About JavaScript '} />
    </div>
  )

  // ====================================

  // --- Use State

  // const [title, setTitle] = useState('Title')
  // const [body, setBody] = useState('Body')

  // const addNewPost = e => {
  //   e.preventDefault()

  //   const newPost = {
  //     id: posts.length + 1,
  //     title,
  //     body,
  //   }

  //   setPosts([...posts, newPost])
  //   setTitle('')
  //   setBody('')
  // }

  // return (
  //   <div className='App'>
  //     <form>
  //       {/* Управляемый компонент */}
  //       <MyInput value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='Name post' />
  //       <MyInput value={body} onChange={e => setBody(e.target.value)} type='text' placeholder='Description post' />
  //       <MyButton onClick={addNewPost} type='sybmit'>
  //         Создать пост
  //       </MyButton>
  //     </form>
  //     <PostList posts={posts} title={'Posts About JavaScript '} />
  //   </div>
  // )

  // ====================================

  // --- Use Ref
  // const bodyInputRef = useRef()

  // const addNewPost = e => {
  //   e.preventDefault()

  //   console.log(bodyInputRef.current.value)
  // }

  /* <MyInput ref={bodyInputRef} type='text' placeholder='Description post' /> */
}

export default App
