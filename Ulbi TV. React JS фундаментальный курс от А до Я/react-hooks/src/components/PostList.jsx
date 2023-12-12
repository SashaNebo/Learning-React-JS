import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, setPosts }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem setPosts={setPosts} number={++index} key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
