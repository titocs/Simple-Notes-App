import { Link } from 'react-router-dom'
import { Tooltip } from 'flowbite-react'
import { IoArchive } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Fade } from 'react-reveal';

const ArchivePagesButton = () => {
  return (
    <Fade left>
      <Link to='/archives' className='flex justify-center'>
        <Tooltip content="Arsipku">
          <div className=''>
            <IconContext.Provider value={{ color: '#4B5563'}}>
              <IoArchive size={33} />
            </IconContext.Provider>
          </div>
        </Tooltip>
      </Link>
    </Fade>
  )
}

export default ArchivePagesButton