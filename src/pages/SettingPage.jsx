import { FaUser } from 'react-icons/fa';
import { Select } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';

const SettingPage = ({ onLogout, authedUser }) => {
  const navigate = useNavigate();
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);
  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if(storedLocale) {
      setSelectedLocale(storedLocale);
    }
  }, []);

  const handleLocaleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLocale(selectedValue);
    toggleLocale(selectedValue);
  };
  
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className={`${currentTheme === 'light' ? 'bg-white' : 'bg-slate-700'} border-b-2 px-7 py-2 md:px-14`}>
        <button onClick={goBack}>
          <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
            <IoIosArrowRoundBack size={40} />
          </IconContext.Provider>
        </button>
      </header>
      <div className={`${currentTheme === 'light' ? 'bg-light' : 'bg-slate-700'} px-8 min-h-screen flex flex-col items-center justify-center`}>
        <div className='relative w-[278px] border-[5px] rounded-3xl p-4 md:w-[400px]'>
          <div className='border-[3px] absolute top-[-35px] right-1/2 translate-x-1/2 bg-white p-3 w-fit rounded-full mx-auto'>
            <FaUser size={32} />
          </div>
          <div>
            <section className='my-6'>
              <div className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} mb-1 p-2 rounded-md`}>
                <span className={`border-b block font-semibold`}>{ locale === 'id' ? 'Nama' : 'Name'}</span>
                <h1 className='py-1'>{ authedUser.name }</h1>
              </div>
              <div className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} p-2 rounded-md`}>
                <span className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} border-b block font-semibold`}>Email</span>
                <h1 className='py-1'>{ authedUser.email }</h1>
              </div>
            </section>
            <section className="mb-6">
              <h1 className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-center font-bold text-lg`}>{ locale === 'id' ? 'Pengaturan' : 'Setting'}</h1>
              <div>
                <div className='flex items-center mb-5 justify-between'>
                  <p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'}`}>{ locale === 'id' ? 'Mode Gelap' : 'Dark Mode'}</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type='checkbox'
                      className='sr-only peer'
                      onChange={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
                      checked={currentTheme === 'dark'}/>
                    <div className={`${currentTheme === 'light' ? 'bg-slate-300' : 'bg-white'} w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'}`}>{ locale === 'id' ? 'Bahasa' : 'Language' }</p>
                  <div className="max-w-md">
                    <Select id="countries" className={`${currentTheme === 'light' ? 'text-black' : 'text-white'}`} required onChange={handleLocaleChange} value={selectedLocale}>
                      <option value='id'>Indonesia</option>
                      <option value='en'>English</option>
                    </Select>
                  </div>
                </div>
              </div>
            </section>
            <button className="flex items-center justify-center gap-2 mx-auto" onClick={onLogout}>
              <IconContext.Provider value={{ color: 'red' }}>
                <FiLogOut size={30} />
              </IconContext.Provider>
              <p className={`${currentTheme === 'light' ? 'text-black' : 'text-white'} text-lg`}>{ locale === 'id' ? 'Keluar' : 'Logout' }</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

SettingPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  authedUser: PropTypes.object.isRequired
};

export default SettingPage;