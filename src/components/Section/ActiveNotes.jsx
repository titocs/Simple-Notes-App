import React from 'react';
import Cards from '../Card/Cards';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../../utils/local-data';

const ActiveNotes = ({ notes, querySearch, deleteNoteHandler }) => {
  return (
    <section className='mb-12'>
      <h1 className='text-3xl font-bold mb-5'>Catatan Aktif</h1>
      <div className='flex flex-col flex-wrap justify-center gap-7 sm:justify-start sm:flex-row'>
        {
          notes.length === 0 ? (
            <p className='text-center'>Tidak ada catatan aktif</p>
          ) : (
            notes.map(note => (
              <Cards
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                backgroundColor={note.backgroundColor}
                archived={note.archived}
                deleteNoteHandler={deleteNoteHandler}>
              </Cards>
            ))
          )
        }
      </div>
    </section>
  )
}

// ActiveNotes.propTypes = {
//   notesData: PropTypes.object.isRequired,
//   querySearch: PropTypes.string.isRequired,
//   deleteNotes: PropTypes.func.isRequired,
//   archiveNotesHandler: PropTypes.func.isRequired
// }

export default ActiveNotes