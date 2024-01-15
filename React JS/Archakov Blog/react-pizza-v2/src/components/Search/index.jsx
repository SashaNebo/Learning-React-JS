import React, { useCallback,  useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { IoIosClose } from 'react-icons/io'

import { setSearchValue } from '../../redux/slices/filterSlice'

import styles from './Search.module.scss'
import { useDispatch} from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const onClickClear = () => {
    setValue('')
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }

  const updateSearhValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str))
    }, 500),
    []
  )

  const onChangeInput = ({ target }) => {
    setValue(target.value)
    updateSearhValue(target.value)
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={(e) => onChangeInput(e)}
        value={value}
        className={styles.root}
        type='text'
        placeholder='search pizza...'
      />
      {value && <IoIosClose onClick={onClickClear} className={styles.clearIcon} />}
    </div>
  )
}

export default Search
