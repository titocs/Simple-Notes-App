import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import LogoImage from '../images/sticky-notes.png';
import useInput from '../hooks/useInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });
    if(!error) {
      onLoginSuccess(data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginHandler({ email, password });
  };

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex flex-col justify-center md:px-16 lg:px-32 xl:px-44 xl:mx-24'>
        <div className=' px-4 py-3 bg-white h-full'>
          <div>
            <img width={40} className="mx-auto mb-1" src={LogoImage} alt="Logo" />
            <h1 className='font-bold mb-7 text-center'>NotesGue</h1>
          </div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="border rounded-md p-3 px-4 mt-3 mb-7">
                <div className="mb-4">
                  <label className='block pb-1' htmlFor="email">Email</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <MdOutlineEmail size={23} />
                    <input
                      id="email"
                      className="border-none focus:ring-0 focus:outline-none w-full"
                      type="email"
                      autoComplete="off"
                      placeholder="Email lo..."
                      onChange={setEmail}
                      required />
                  </div>
                </div>

                <div>
                  <label className='block pb-1' htmlFor="password">Password</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <MdOutlineLock size={23} />
                    <input 
                      id="password"
                      className="border-none focus:ring-0 focus:outline-none w-full" 
                      type="password" 
                      autoComplete="off"
                      placeholder="Password lo..."
                      onChange={setPassword}
                      required />
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-red-400 border flex items-center gap-2 border-black mx-auto p-3 px-10 rounded-3xl">Login <GoArrowRight className="inline" size={20} /></button>
            </form>
          </div>
        </div>
        
        <div className="text-center">Belom punya akun?&nbsp;
          <Link to={'/register'}><span className="font-bold">Daftar sini</span></Link>
        </div>
      </div>
    </>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired
};

export default LoginPage;