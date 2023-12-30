import { useContext, useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { deleteNote, getArchivedNotes } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';
import { TailSpin } from 'react-loader-spinner';
import ThemeContext from '../../contexts/ThemeContext';

const ArchivedNotes = ({ title, querySearch }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [notesAPI, setNotesAPI] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotesAPI(data);
        setInitializing(false);
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteNoteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getArchivedNotes();
    setShowAlert(!showAlert);
    setNotesAPI(data);
  };

  return (
    <section className='mb-12'>
      <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
      <h1 className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-3xl font-bold mb-5`}>{ locale === 'id' ? 'Arsip' : 'Archive'}</h1>
      <div className='flex flex-col flex-wrap justify-center gap-7 sm:justify-start sm:flex-row'>
        {
          initializing ? (
            <TailSpin
              height="60"
              width="60"
              color="#4B5563"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}/>) : 
          (title === null ?  
          notesAPI.filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase())).length === 0 ? (<p className={`text-center ${currentTheme === 'light' ? 'text-black' : 'text-white'}`}>{ locale === 'id' ? 'Ga ada catatan lo yang diarsipin' : 'There`s no archived notes'}</p>) : 
          notesAPI.filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase())).map(note => (
            <Cards
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              deleteNoteHandler={deleteNoteHandler}>
            </Cards>)) : notesAPI.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).length === 0 ? 
            (<p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-center`}>{ locale === 'id' ? 'Ga ada catatan lo yang diarsipin' : 'There`s no archived notes'}</p>) : notesAPI.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).map(note => (
              <Cards
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                deleteNoteHandler={deleteNoteHandler}>
              </Cards>
          )))
        }
      </div>
    </section>
  );
};

ArchivedNotes.propTypes = {
  title: PropTypes.string,
  querySearch: PropTypes.string
};

export default ArchivedNotes;