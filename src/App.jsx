import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArchivePage from './pages/ArchivePage';
import DetailNotePage from './pages/DetailNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { useSearchParams } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LocaleContext from './contexts/LocaleContext';
import SettingPage from './pages/SettingPage';
import './styles/global.css';
import LoginPage from './pages/LoginPage';
import { FallingLines } from 'react-loader-spinner';
import ThemeContext from './contexts/ThemeContext';

const App = () => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [querySearch, setQuerySearch] = useState('');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  const searchNotesHandler = (search) => {
    setQuerySearch(search);
    setSearchParams({ title: search });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      localStorage.setItem('locale', prevLocale === 'id' ? 'en' : 'id');
      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (theme === 'light'){
      document.body.classList.remove('dark');
    }
    else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch(error) {
      console.log('Terjadi kesalahan', error);
    }
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    localStorage.setItem('theme', '');
    localStorage.setItem('locale', '');
  };

  if(initializing) {
    return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <FallingLines
          color="#4B5563"
          width="100"
          visible={true}
          ariaLabel='falling-lines-loading'
        />
        <h1 className='text-center'>{ locale === 'id' ? 'lagi ngambil data, sabar yaa bro/sist...' : 'Collecting data, be patient...' }</h1>
      </div>
    </>);
  }

  if(authedUser === null) {
    return (
      <Routes>
        <Route path='/*' element={<LoginPage onLoginSuccess={onLoginSuccess} />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    );
  }

  return (
    <>
      <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
        <LocaleContext.Provider value={localeContextValue}>
          <main>
            <Routes>
              <Route path='/' element={<Home title={title} querySearch={querySearch} searchNotesHandler={searchNotesHandler}/>} />
              <Route path='/archives' element={<ArchivePage title={title} querySearch={querySearch} searchNotesHandler={searchNotesHandler}/>} />
              <Route path='/notes/:id' element={<DetailNotePage />} />
              <Route path='/setting' element={<SettingPage onLogout={onLogout} authedUser={authedUser} />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;