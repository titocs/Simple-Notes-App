import React from 'react';
import Cards from '../Card/Cards';

const ActiveNotes = ({ notesData, querySearch, deleteNotes, archiveNotesHandler }) => {
  const filteredNotes = notesData.notes.filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase()));
  const notesLength = filteredNotes.filter((f) => f.archived === false).length;

  return (
    <section className='mb-12'>
      <h1 className='text-3xl font-bold mb-5'>Catatan Aktif</h1>
      <div className='flex flex-col flex-wrap justify-center gap-7 sm:justify-start sm:flex-row'>
        {
          notesLength === 0 ? (
            <p className='text-center'>Tidak ada catatan aktif</p>
          ) : (
            filteredNotes.filter((note) => note.archived === false).map((note) => (
              <Cards
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                backgroundColor={note.backgroundColor}
                archived={note.archived}
                deleteNotes={deleteNotes}
                archiveNotesHandler={archiveNotesHandler}>
              </Cards>
            ))
          )
        }
      </div>
    </section>
  )
}

export default ActiveNotes