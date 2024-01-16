import React, { useRef, useState } from 'react'

const EventsExample: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
   console.log(inputRef.current?.value);
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag');
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP');
    
  }
  
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

    const leaveHanlder = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDrag(false)
    }

  return (
    <div>
      <input onChange={changeHandler} value={value} type='text' placeholder='Сontrolled' />
      <input ref={inputRef} type='text' placeholder='Uncontrolled' />
      <button onClick={clickHandler}>show value</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red', marginTop: 20 }}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHanlder}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 20,
        }}></div>
    </div>
  )
}

export default EventsExample
