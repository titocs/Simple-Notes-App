import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLock } from 'react-icons/md';
import { GoArrowRight } from 'react-icons/go';
import LogoImage from '../images/sticky-notes.png';
import { FiUser } from 'react-icons/fi';
import { register } from '../utils/network-data';
import useInput from '../hooks/useInput';

const RegisterPage = () => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useInput('');

  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if(!error) {
      navigate('/');
    }
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if(password !== passwordConfirm) {
      return alert('Password/Konfirmasi Password Salah');
    }
    onRegisterHandler({ name, email, password });
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
            <form action="" onSubmit={onHandleSubmit}>
              <div className="border rounded-md p-3 px-4 mt-3 mb-7">
                <div className="mb-4">
                  <label className='block pb-1' htmlFor="nama">Nama</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <FiUser size={23} />
                    <input
                      className="border-none focus:ring-0 focus:outline-none w-full"
                      id="nama"
                      type="text"
                      autoComplete="off"
                      placeholder="Nama lo..."
                      value={name}
                      onChange={setName}
                      required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className='block pb-1' htmlFor="">Email</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <MdOutlineEmail size={23} />
                    <input
                      className="border-none focus:ring-0 focus:outline-none w-full"
                      type="email"
                      autoComplete="off"
                      placeholder="Email lo..."
                      value={email}
                      onChange={setEmail}
                      required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className='block pb-1' htmlFor="">Password</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <MdOutlineLock size={23} />
                    <input 
                      className="border-none focus:ring-0 focus:outline-none w-full" 
                      type="password" 
                      autoComplete="off"
                      placeholder="Password lo..."
                      value={password}
                      onChange={setPassword}
                      required />
                  </div>
                </div>

                <div>
                  <label className='block pb-1' htmlFor="">Konfirmasi Password</label>
                  <div className="flex items-center border p-1 px-3 border-black rounded-lg">
                    <MdOutlineLock size={23} />
                    <input 
                      className="border-none focus:ring-0 focus:outline-none w-full" 
                      type="password" 
                      autoComplete="off"
                      placeholder="Konfirmasi Password..."
                      value={passwordConfirm}
                      onChange={setPasswordConfirm}
                      required />
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-red-400 border flex items-center gap-2 border-black mx-auto p-3 px-10 rounded-3xl">Registrasi <GoArrowRight className="inline" size={20} /></button>
            </form>
          </div>
        </div>
        
        <div className="text-center">Udah punya akun?&nbsp;
          <Link to={'/login'}><span className="font-bold">Langsung login sini</span></Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;