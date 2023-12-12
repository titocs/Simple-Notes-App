import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

const SearchNotes = ({ searchNotesHandler }) => {
  const handleInput = (event) => {
    searchNotesHandler(event.target.value);
  }

  return (
    <div className='w-full flex items-center border px-2 py-1 border-slate-400 rounded-md overflow-hidden mb-5 md:w-[470px]'>
      <BiSearchAlt2/>
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