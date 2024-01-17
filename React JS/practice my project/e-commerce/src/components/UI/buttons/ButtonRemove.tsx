import React from "react";
import { MdClose } from 'react-icons/md'

const ButtonRemove: React.FC = () => {
  return (
    <button className='bg-stone-950 hover:bg-red-500'>
      <MdClose />
    </button>
  )
}

export default ButtonRemove;
