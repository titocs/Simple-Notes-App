import SearchNotes from '../components/SearchNotes';
import ArchivedNotes from '../components/Section/ArchivedNotes';
import { useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import PropTypes from 'prop-types';

const ArchivePage = ({ title, setNotes, querySearch, searchNotesHandler }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <Logo />
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ArchivedNotes
              title={title}
              querySearch={querySearch}
              setNotes={setNotes}></ArchivedNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

ArchivePage.propTypes = {
  title: PropTypes.string,
  setNotes: PropTypes.func.isRequired,
  querySearch: PropTypes.string.isRequired,
  searchNotesHandler: PropTypes.func.isRequired
}

export default ArchivePage