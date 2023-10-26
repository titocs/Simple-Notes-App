import React from 'react';
import SearchNotes from './components/SearchNotes';
import AddNotes from './components/AddNotes';
import ActiveNotes from './components/Section/ActiveNotes';
import ArchivedNotes from './components/Section/ArchivedNotes';
import { useState } from 'react';
import { getInitialData } from './utils';
import Alert from './components/Alert';
import Footer from './components/Footer';

const App = () => {
  const [notesData, setNotesData] = useState({ notes: getInitialData() });
  const [showAlert, setShowAlert] = useState(false);
  const [querySearch, setQuerySearch] = useState('');

  const addNotesHandler = ({ title, body, backgroundColor }) => {
    setNotesData((prevData) => {
      return {
        notes: [
          ...prevData.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            backgroundColor,
            archived: false
          }
        ]
      };
    });
  }

  const deleteNotesHandler = (id) => {
    const notes = notesData.notes.filter(note => note.id !== id);
    setShowAlert(!showAlert);
    setNotesData({ notes });
  }

  const archiveNotesHandler = (id) => {
    setNotesData((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });
      return { ...prevState, notes: updatedNotes };
    });
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
          <AddNotes addNotesHandler={addNotesHandler} setNotesData={setNotesData}></AddNotes>
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ActiveNotes 
              notesData={notesData}
              querySearch={querySearch}
              deleteNotes={deleteNotesHandler}
              archiveNotesHandler={archiveNotesHandler}></ActiveNotes>
            <ArchivedNotes
              notesData={notesData}
              querySearch={querySearch}
              deleteNotes={deleteNotesHandler}
              archiveNotesHandler={archiveNotesHandler}></ArchivedNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App