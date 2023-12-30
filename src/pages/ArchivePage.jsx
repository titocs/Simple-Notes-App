import SearchNotes from '../components/SearchNotes';
import ArchivedNotes from '../components/Section/ArchivedNotes';
import { useContext, useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';

const ArchivePage = ({ title, querySearch, searchNotesHandler }) => {
  const [showAlert, setShowAlert] = useState(false);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} min-h-screen px-2 flex`}>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} px-4 py-3 border-r border-slate-400 fixed left-0 top-0 h-full`}>
          <Logo />
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ArchivedNotes
              title={title}
              querySearch={querySearch}></ArchivedNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

ArchivePage.propTypes = {
  title: PropTypes.string,
  querySearch: PropTypes.string.isRequired,
  searchNotesHandler: PropTypes.func.isRequired
};

export default ArchivePage;