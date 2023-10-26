import React from 'react';
import DeleteButton from './DeleteButton';
import Info from './Info';
import Flip from 'react-reveal/Flip';

const Cards = ({ id, title, body, createdAt, backgroundColor, archived, deleteNotes, archiveNotesHandler }) => {
  return (
    <Flip left>
      <div className={`${backgroundColor} relative w-[222px] h-[318px] rounded-lg p-4 flex flex-col justify-between`}>
        <DeleteButton id={id} deleteNotes={deleteNotes}></DeleteButton>
        <div className='overflow-scroll'>
          <h2 className='text-base font-bold mb-2 pb-1 border-b border-black'>{ title }</h2>
          <p className='text-sm text-ellipsis overflow-hidden'>{ body }</p>
        </div>
        <Info 
          createdAt={createdAt}
          id={id}
          archived={archived}
          archiveNotesHandler={archiveNotesHandler}></Info>
      </div>
    </Flip>
  )
}

export default Cards