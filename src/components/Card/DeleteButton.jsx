import React, { useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { deleteNote } from '../../utils/local-data';

const DeleteButton = ({ id, deleteNoteHandler }) => {
  return (
    <button className='absolute p-1 bg-red-500 rounded-full right-[15px] top-[-14px]' onClick={() => deleteNoteHandler(id)}>
      <RxCross2 size={20} />
    </button>
  )
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNotes: PropTypes.func.isRequired
}

export default DeleteButton