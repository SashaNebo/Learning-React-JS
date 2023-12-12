import React, { useMemo, useRef, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - язык программирования' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = newPost => {
    setPosts([...posts, newPost])
  }

  // Callback
  const sortPosts = sort => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '40px 0' }} />
      <MyInput type='text' placeholder='Search' value={searchQuery} onChange={({ target }) => setSearchQuery(target.value)} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Sorting by'
        options={[
          { value: 'title', name: 'By Name' },
          { value: 'body', name: 'By Description' },
        ]}
      />
      {sortedAndSearchedPosts.length ? <PostList setPosts={setPosts} posts={sortedAndSearchedPosts} title={'Posts About JavaScript '} /> : <h1 style={{ textAlign: 'center' }}>Posts not found!</h1>}
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
