import logo from '../images/sticky-notes.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
      <img className='mx-auto' src={logo} width={30} height={30} alt="Logo" />
      <h1 className='font-bold mb-7'>NotesKu</h1>
    </Link>
  )
}

export default Logo