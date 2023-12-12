import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = props => {
  const removePost = id => {
    const { setPosts } = props

    setPosts(posts => posts.filter(post => post.id !== id))
  }

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => removePost(props.post.id)}>Remove</MyButton>
      </div>
    </div>
  )
}

export default PostItem
