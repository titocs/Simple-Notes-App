import { useContext } from 'react';
import logo from '../images/sticky-notes.png';
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const Logo = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Link to={'/'}>
      <img className='mx-auto' src={logo} width={30} height={30} alt="Logo" />
      <h1 className={`${currentTheme === 'light' ? 'text-slate-700' : 'text-white' } font-bold mb-7 text-center`}>NotesGue</h1>
    </Link>
  );
};

export default Logo;