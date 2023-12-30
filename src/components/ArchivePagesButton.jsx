import { Link } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import { IoArchive } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Fade } from 'react-reveal';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

const ArchivePagesButton = () => {
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Fade left>
      <Link to='/archives' className='flex justify-center mb-7'>
        <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Arsipku' : 'My Archive'}`}>
          <div>
            <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
              <IoArchive size={33} />
            </IconContext.Provider>
          </div>
        </Tooltip>
      </Link>
    </Fade>
  );
};

export default ArchivePagesButton;