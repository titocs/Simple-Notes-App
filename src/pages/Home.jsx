import SearchNotes from '../components/SearchNotes';
import AddNotes from '../components/AddNotes';
import ActiveNotes from '../components/Section/ActiveNotes';
import { useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import { getAllNotes } from '../utils/local-data';
import ArchivePagesButton from '../components/ArchivePagesButton';
import { addNote } from '../utils/local-data';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';

const Home = ({ setNotes, title, querySearch, searchNotesHandler }) => {
  const [showAlert, setShowAlert] = useState(false);

  const addNoteHandler = ({title, body, backgroundColor}) => {
    addNote({ title, body, backgroundColor});
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  }

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <Logo />
          <div className=''>
            <AddNotes addNoteHandler={addNoteHandler}></AddNotes>
            <ArchivePagesButton />
          </div>
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ActiveNotes 
              title={title}
              querySearch={querySearch}
              setNotes={setNotes}></ActiveNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

Home.propTypes = {
  title: PropTypes.string,
  querySearch: PropTypes.string.isRequired,
  setNotes: PropTypes.func.isRequired,
  searchNotesHandler: PropTypes.func.isRequired
}

export default Home