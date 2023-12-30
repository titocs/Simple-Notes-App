import { showFormattedDate } from '../../utils';
import PropTypes from 'prop-types';
import { RiExternalLinkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';

const Info = ({ id, createdAt }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className={`${currentTheme === 'light' ? 'border-t-black' : 'border-t-white'} flex justify-between items-center border-t border-t-black mt-[10px] border-dashed py-1`}>
      <div className={`text-xs ${currentTheme === 'light' ? 'text-black' : 'text-white'}`}>{ showFormattedDate(createdAt) }</div>
      <Link to={`/notes/${id}`}>
        <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }}>
          <RiExternalLinkFill size={20}></RiExternalLinkFill>
        </IconContext.Provider>
      </Link>
    </div>
  );
};

Info.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  createdAt: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
};

export default Info;