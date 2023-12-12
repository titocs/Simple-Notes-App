import React from 'react';
import DeleteButton from './DeleteButton';
import Info from './Info';
import Flip from 'react-reveal/Flip';
import PropTypes from 'prop-types';

const Cards = ({ id, title, body, createdAt, backgroundColor, archived, deleteNoteHandler }) => {
  return (
    <Flip left>
      <div className={`${backgroundColor} relative w-[222px] h-[230px] rounded-lg p-4 flex flex-col justify-between`}>
        <DeleteButton id={id} deleteNoteHandler={deleteNoteHandler}></DeleteButton>
        <div className='overflow-hidden'>
          <h2 className='text-base font-bold mb-2 pb-1 border-b border-black'>{ title }</h2>
          <p className='text-sm text-ellipsis overflow-hidden'>{ body }</p>
        </div>
        <Info
          createdAt={createdAt}
          id={id}
          archived={archived}></Info>
      </div>
    </Flip>
  )
}

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  backgroundColor: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleteNotes: PropTypes.func.isRequired,
  archiveNotesHandler: PropTypes.func.isRequired,
}

export default Cards