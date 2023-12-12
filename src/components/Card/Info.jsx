import React from 'react';
import { IoArchive } from 'react-icons/io5';
import { MdOutlineUnarchive } from 'react-icons/md';
import { showFormattedDate } from '../../utils';
import { Tooltip } from 'flowbite-react';
import PropTypes from 'prop-types';
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Info = ({ id, createdAt, archived, archiveNotesHandler }) => {
  return (
    <div className='flex justify-between items-center border-t border-t-black mt-[10px] border-dashed py-1'>
      <div className='text-xs'>{ showFormattedDate(createdAt) }</div>
      {/* {
        archived === false ? (
        <Tooltip content="Arsipkan">
          <button onClick={() => archiveNotesHandler(id)}>
            <IoArchive size={20} />
          </button>
        </Tooltip>
        ) : (
          <Tooltip content="Kembalikan">
            <button onClick={() => archiveNotesHandler(id)}>
              <MdOutlineUnarchive size={20} />
            </button>
          </Tooltip>
        )
      } */}
      <Link to={`/notes/${id}`}>
        <RiExternalLinkFill size={20}></RiExternalLinkFill>
      </Link>
    </div>
  )
}

Info.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  archived: PropTypes.bool.isRequired,
  archiveNotesHandler: PropTypes.func.isRequired,
}

export default Info