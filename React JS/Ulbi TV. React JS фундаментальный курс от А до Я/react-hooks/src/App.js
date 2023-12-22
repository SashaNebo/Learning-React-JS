import React, { useEffect, useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import PostService from './components/API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount } from './utils/pages'
import Pagination from './components/UI/pagination/Pagination'

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const changePage = page => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className='App'>
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '40px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <h1 style={{ textAlign: 'center' }}>Произошла ошибка {postsError}</h1>}
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      ) : (
        <PostList setPosts={setPosts} posts={sortedAndSearchedPosts} title={'Posts About JavaScript '} />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
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
