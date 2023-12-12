import React from 'react';
import SearchNotes from '../components/SearchNotes';
import AddNotes from '../components/AddNotes';
import ActiveNotes from '../components/Section/ActiveNotes';
import ArchivedNotes from '../components/Section/ArchivedNotes';
import { useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import { getArchivedNotes } from '../utils/local-data';

const ArchivePage = ({ notes, setNotes }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [querySearch, setQuerySearch] = useState('');

  const searchNotesHandler = (search) => {
    setQuerySearch(search);
  }

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <h1 className='font-bold mb-7'>NotesKu</h1>
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ArchivedNotes
              querySearch={querySearch}
              setNotes={setNotes}></ArchivedNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ArchivePage