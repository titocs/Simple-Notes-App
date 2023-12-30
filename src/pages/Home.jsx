import SearchNotes from '../components/SearchNotes';
import AddNotes from '../components/AddNotes';
import ActiveNotes from '../components/Section/ActiveNotes';
import { useContext, useState } from 'react';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import ArchivePagesButton from '../components/ArchivePagesButton';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Tools from '../components/Tools';
import ThemeContext from '../contexts/ThemeContext';

const Home = ({ title, querySearch, searchNotesHandler }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [notesAPI, setNotesAPI] = useState([]);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} min-h-screen px-2 flex`}>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
        <div className={`${currentTheme === 'light' ? 'bg-white border-slate-400' : 'bg-slate-700 border-white'} px-4 py-3 border-r fixed left-0 top-0 h-full`}>
          <Logo />
          <div>
            <AddNotes setNotesAPI={setNotesAPI}></AddNotes>
            <ArchivePagesButton />
            <Tools />
          </div>
        </div>

        <div className={`basis-[100%] ${currentTheme === 'light'? 'bg-white' : 'bg-slate-700'} px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]`}>
          <SearchNotes searchNotesHandler={searchNotesHandler}></SearchNotes>
          <main>
            <ActiveNotes
              notesAPI={notesAPI}
              title={title}
              querySearch={querySearch}
              setNotesAPI={setNotesAPI}></ActiveNotes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  querySearch: PropTypes.string.isRequired,
  searchNotesHandler: PropTypes.func.isRequired,
};

export default Home;