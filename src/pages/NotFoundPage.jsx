import { Link } from 'react-router-dom'
import NotFoundImage from '../images/page-not-found.png'
import { IoHomeOutline } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <div className='basis-[100%] text-center px-4 py-3'>
          <main>
            <div className=''>
              <h1 className='font-extrabold mb-8 mt-3 text-[1.2rem] '>Halaman Tidak Ditemukan</h1>
              <img className='mx-auto py-3 my-5 mb-8' src={NotFoundImage} alt="" />
              <Link className='flex items-center gap-2 p-2 px-5 border border-slate-300 rounded-3xl w-fit text-center mx-auto text-sm' to={'/'}> <IoHomeOutline /> Kembali ke Halaman Utama</Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage