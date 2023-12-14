import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={({ target }) => onChange(target.value)}>
      <option selected hidden value=''>
        {defaultValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
