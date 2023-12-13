import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput type='text' placeholder='Search' value={filter.query} onChange={({ target }) => setFilter({ ...filter, query: target.value })} />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Sorting by'
        options={[
          { value: 'title', name: 'By Name' },
          { value: 'body', name: 'By Description' },
        ]}
      />
    </div>
  )
}

export default PostFilter
