import React, { useEffect } from 'react';
import SearchNotes from '../components/SearchNotes';
import AddNotes from '../components/AddNotes';
import ActiveNotes from '../components/Section/ActiveNotes';
import ArchivedNotes from '../components/Section/ArchivedNotes';
import { useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import { getAllNotes } from '../utils/local-data';
import ArchivePagesButton from '../components/ArchivePagesButton';
import { addNote, deleteNote } from '../utils/local-data';

const Home = ({ notes, setNotes }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [querySearch, setQuerySearch] = useState('');

  // const addNotesHandler = ({ title, body, backgroundColor }) => {
  //   // setNotesData((prevData) => {
  //   //   return {
  //   //     notes: [
  //   //       ...prevData.notes,
  //   //       {
  //   //         id: +new Date(),
  //   //         title,
  //   //         body,
  //   //         createdAt: +new Date(),
  //   //         backgroundColor,
  //   //         archived: false
  //   //       }
  //   //     ]
  //   //   };
  //   // });
  //   return 
  // }

  // const deleteNotesHandler = (id) => {
  //   const notes = notesData.notes.filter(note => note.id !== id);
  //   setShowAlert(!showAlert);
  //   setNotesData({ notes });
  // }

  // const archiveNotesHandler = (id) => {
  //   setNotesData((prevState) => {
  //     const updatedNotes = prevState.notes.map((note) => {
  //       if (note.id === id) {
  //         return { ...note, archived: !note.archived };
  //       }
  //       return note;
  //     });
  //     return { ...prevState, notes: updatedNotes };
  //   });
  // }

  const addNoteHandler = ({title, body, backgroundColor}) => {
    addNote({ title, body, backgroundColor});
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  }

  const deleteNoteHandler = (id) => {
    deleteNote(id);
    const updatedNotes = getAllNotes();
    setShowAlert(!showAlert);
    setNotes(updatedNotes);
  }

  const searchNotesHandler = (search) => {
    setQuerySearch(search);
  }

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <h1 className='font-bold mb-7'>NotesKu</h1>
          <div className=''>
            <AddNotes addNoteHandler={addNoteHandler}></AddNotes>
            <ArchivePagesButton />
          </div>
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ActiveNotes 
              notes={notes}
              querySearch={querySearch}
              deleteNoteHandler={deleteNoteHandler}
              ></ActiveNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home