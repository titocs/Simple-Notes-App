import { useContext, useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { deleteNote, getActiveNotes } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';
import { TailSpin } from 'react-loader-spinner';
import ThemeContext from '../../contexts/ThemeContext';

const ActiveNotes = ({ notesAPI, title, querySearch, setNotesAPI }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotesAPI(data);
        setInitializing(false);
      } catch(error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const deleteNoteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setShowAlert(!showAlert);
    setNotesAPI(data);
  };

  return (
    <section className='mb-12'>
      <Alert showAlert={showAlert} setShowAlert={setShowAlert}></Alert>
      <h1 className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-3xl font-bold mb-5`}>{ locale === 'id' ? 'Catatan Aktif' : 'Active Notes' }</h1>
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
          notesAPI && (
            title === null ?
            notesAPI.filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase())).length === 0 ? (<p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-center`}>{ locale === 'id' ? 'Ga ada catatan lo yang aktif' : 'There`s no active notes'}</p>) : 
            notesAPI.filter((note) => note.title.toLowerCase().includes(querySearch.toLowerCase())).map(note => (
              <Cards
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                deleteNoteHandler={deleteNoteHandler}>
              </Cards>)) : notesAPI.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).length === 0 ? 
              (<p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-center`}>{ locale === 'id' ? 'Ga ada catatan lo yang aktif' : 'There`s no active notes'}</p>) : notesAPI.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())).map(note => (
                <Cards
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  createdAt={note.createdAt}
                  deleteNoteHandler={deleteNoteHandler}>
                </Cards>
          ))
        )}
      </div>
    </section>
  );
};

ActiveNotes.propTypes = {
  notesAPI: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ]),
  title: PropTypes.string,
  querySearch: PropTypes.string.isRequired,
  setNotesAPI: PropTypes.func.isRequired
};

export default ActiveNotes;