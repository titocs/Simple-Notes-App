import React, { useState } from 'react';
import Cards from '../Card/Cards';
import PropTypes from 'prop-types';
import { deleteNote, getAllNotes, getArchivedNotes } from '../../utils/local-data';
import Alert from '../Alert';

const ArchivedNotes = ({ querySearch, setNotes }) => {
  const [showAlert, setShowAlert] = useState(false);
  const deleteNoteHandler = (id) => {
    deleteNote(id);
    const updatedNotes = getAllNotes();
    setShowAlert(!showAlert);
    setNotes(updatedNotes);
  }

  return (
    <section className='mb-12'>
      <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
      <h1 className='text-3xl font-bold mb-5'>Arsip</h1>
      <div className='flex flex-col flex-wrap justify-center gap-7 sm:justify-start sm:flex-row'>
        { 
          getArchivedNotes()?.length === 0 ? (
            <p className='text-center'>Tidak ada catatan yang diarsipkan</p>
          ) : (
            getArchivedNotes().map(note => (
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

ArchivedNotes.propTypes = {
  archivedNotes: PropTypes.object.isRequired,
  querySearch: PropTypes.string,

}

export default ArchivedNotes