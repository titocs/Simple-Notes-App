import { Link } from 'react-router-dom';
import NotFoundImage from '../images/page-not-found.png';
import { IoHomeOutline } from 'react-icons/io5';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const NotFoundPage = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <div className='basis-[100%] text-center px-4 py-3'>
          <main>
            <div>
              <h1 className='font-extrabold mb-8 mt-3 text-[1.2rem] '>{ locale === 'id' ? 'Eiitts... kayanya lo nyasar' : 'Eiitss... looks like you got lost'}</h1>
              <img className='mx-auto py-3 my-5 mb-8' src={NotFoundImage} alt="Not Found Image" />
              <Link className='flex items-center gap-2 p-2 px-5 border-2 border-slate-400 rounded-3xl w-fit text-center mx-auto text-sm animate-bounce' to={'/'}> <IoHomeOutline />{ locale === 'id' ? 'Balik lagi ke halaman awal' : 'Back to Homepage'}</Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;