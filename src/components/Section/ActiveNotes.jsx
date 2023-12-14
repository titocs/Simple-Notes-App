import { useState } from 'react';
import Cards from '../Card/Cards';
import PropTypes from 'prop-types';
import { deleteNote, getActiveNotes, getAllNotes } from '../../utils/local-data';
import Alert from '../Alert';

const ActiveNotes = ({ title, querySearch, setNotes }) => {
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
      <h1 className='text-3xl font-bold mb-5'>Catatan Aktif</h1>
      <div className='flex flex-col flex-wrap justify-center gap-7 sm:justify-start sm:flex-row'>
        {
          title === null ? getActiveNotes().filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase())).map(note => (
            <Cards
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              backgroundColor={note.backgroundColor}
              deleteNoteHandler={deleteNoteHandler}>
            </Cards>
          )) 
          : getActiveNotes().filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).length === 0 ?
          (<p className='text-center'>Tidak ada catatan aktif</p>
          ) : (
            getActiveNotes().filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).map(note => (
              <Cards
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                backgroundColor={note.backgroundColor}
                deleteNoteHandler={deleteNoteHandler}>
              </Cards>
            ))
          )
        }
      </div>
    </section>
  )
}

ActiveNotes.propTypes = {
  title: PropTypes.string,
  querySearch: PropTypes.string.isRequired,
  setNotes: PropTypes.func.isRequired
}

export default ActiveNotes