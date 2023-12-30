import { Tooltip } from 'flowbite-react';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaGear } from 'react-icons/fa6';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

const Tools = () => { 
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <Fade left>
        <Link to={'/setting'}>
          <div className="flex justify-center">
            <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Pengaturan' : 'Setting'}`}>
              <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
                <FaGear className="hover:animate-spin" size={30}/>
              </IconContext.Provider>
            </Tooltip>
          </div>
        </Link>
      </Fade>
    </>
  );
};

export default Tools;