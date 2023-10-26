import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const DeleteButton = ({ id, deleteNotes }) => {
  return (
    <button className='absolute p-1 bg-red-500 rounded-full right-[15px] top-[-14px]' onClick={() => deleteNotes(id)}>
      <RxCross2 size={20} />
    </button>
  )
}

export default DeleteButton