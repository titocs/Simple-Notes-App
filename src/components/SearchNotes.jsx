import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import { IconContext } from 'react-icons';

const SearchNotes = ({ searchNotesHandler }) => {
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  const handleInput = (event) => {
    searchNotesHandler(event.target.value);
  };

  return (
    <div className='w-full flex items-center border px-2 py-1 border-slate-400 rounded-3xl overflow-hidden mb-5 md:w-[470px]'>
      <div className='border-2 p-2 rounded-full border-slate-300'>
        <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
          <BiSearchAlt2 width={20} />
        </IconContext.Provider>
      </div>
      <form className='w-full'>
        <input
          type="text"
          className={`${currentTheme === 'light' ? 'bg-white text-black placeholder:text-black' : 'bg-slate-700 text-white placeholder:text-white'} border-none w-full outline-none px-2 placeholder:text-sm focus:outline-none focus:border-none focus:ring-0`}
          placeholder={`${locale === 'id' ? 'Cari...' : 'Search...'}`}
          onChange={handleInput} />
      </form>
    </div>
  );
};

SearchNotes.propTypes = {
  searchNotesHandler: PropTypes.func.isRequired
};

export default SearchNotes;