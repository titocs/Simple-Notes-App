import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

const SearchNotes = ({ searchNotesHandler }) => {
  const handleInput = (event) => {
    searchNotesHandler(event.target.value);
  }

  return (
    <div className='w-full flex items-center border px-2 py-1 border-slate-400 rounded-3xl overflow-hidden mb-5 md:w-[470px]'>
      <div className='border-2 p-2 rounded-full border-slate-300'>
        <BiSearchAlt2 width={20} />
      </div>
      <form className='w-full'>
        <input
          type="text"
          className='border-none w-full outline-none px-2 placeholder:text-sm focus:outline-none focus:border-none focus:ring-0'
          placeholder='Cari...'
          onChange={handleInput} />
      </form>
    </div>
  )
}

SearchNotes.propTypes = {
  searchNotesHandler: PropTypes.func.isRequired
}

export default SearchNotes;