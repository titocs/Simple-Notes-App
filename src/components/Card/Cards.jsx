import DeleteButton from './DeleteButton';
import Info from './Info';
import Flip from 'react-reveal/Flip';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const Cards = ({ id, title, body, createdAt, deleteNoteHandler }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Flip left>
      <div className={`relative w-[222px] h-[230px] border-2 border-slate-300 rounded-lg p-4 flex flex-col justify-between`}>
        <DeleteButton id={id} deleteNoteHandler={deleteNoteHandler}></DeleteButton>
        <div className='overflow-hidden'>
          <h2 className={`${currentTheme === 'light' ? 'text-black border-black' : 'text-white border-white' } text-base font-bold mb-2 pb-1 border-b`}>{ title }</h2>
          <p className={`${currentTheme === 'light' ? 'text-black' : 'text-white' } text-sm line-clamp-6 text-ellipsis overflow-hidden`}>{ HTMLReactParser(body) }</p>
        </div>
        <Info
          createdAt={createdAt}
          id={id}></Info>
      </div>
    </Flip>
  );
};

Cards.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  deleteNoteHandler: PropTypes.func.isRequired
};

export default Cards;