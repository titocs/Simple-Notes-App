import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { showFormattedDate } from '../utils';
import {  Tooltip } from 'flowbite-react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiArchiveIn } from 'react-icons/bi';
import { BiArchiveOut } from 'react-icons/bi';
import Logo from '../components/Logo';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import HTMLReactParser from 'html-react-parser';
import { FallingLines } from 'react-loader-spinner';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import { IconContext } from 'react-icons';

const DetailNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [archived, setArchived] = useState(getNote(id).archived);
  const [notesAPI, setNotesAPI] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNote(id);
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
    navigate('/');
  };

  const archiveNoteHandler = (id) => {
    if(archived){
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setArchived(!archived);
  };

  if(initializing) {
    return (
      <>
        <div className='h-screen flex flex-col items-center justify-center'>
          <FallingLines
            color="#4B5563"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'/>
          <h1 className='text-center'>{ locale === 'id' ? 'lagi ngambil data, sabar yaa bro/sist...' : 'Collecting data, be patient...' }</h1>
        </div>
      </>);
  }

  return (
    <>
      <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} min-h-screen px-2 flex`}>
        <div className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} px-4 py-3 border-r border-slate-400 fixed left-0 top-0 h-full`}>
          <Logo />
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <main>
            <article className={`p-2 rounded-lg`}>
              <div className={`${currentTheme === 'light' ? 'text-black' : 'text-white'}`}>
                <h1 className='font-semibold text-center text-5xl mb-5 xl:text-[6rem]'>{ notesAPI.title }</h1>
                <p>{ showFormattedDate(notesAPI.createdAt) }</p>
                <p>{ HTMLReactParser(notesAPI.body) }</p>
              </div>
            </article>
          </main>

          <div className='flex p-8 items-center gap-5 absolute bottom-0 right-0'>
            {
              archived ? (
                <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Balikin' : 'Return'}`}>
                  <button className={`${currentTheme === 'light' ? 'border-[#4B5563]' : 'border-white'} p-3 border-[3px] border-[#4B5563] rounded-full`} onClick={() => archiveNoteHandler(id)}>
                    <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
                      <BiArchiveOut size={30}/>
                    </IconContext.Provider>
                  </button>
                </Tooltip>
              ) :
              (
                <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Arsipin' : 'Archive'}`}>
                  <button className={`${currentTheme === 'light' ? 'border-[#4B5563]' : 'border-white'} p-3 border-[3px] rounded-full`} onClick={() => archiveNoteHandler(id)}>
                    <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
                      <BiArchiveIn size={30}/>
                    </IconContext.Provider>
                  </button>
                </Tooltip>
              )
            }
            
            <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Hapus' : 'Delete'}`}>
              <button className={`${currentTheme === 'light' ? 'border-[#4B5563]' : 'border-white'} p-3 border-[3px]  rounded-full`} onClick={() => deleteNoteHandler(id)}>
                <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
                  <RiDeleteBin6Line size={30}/>
                </IconContext.Provider>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DetailNotePage;