import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <h1 className='font-bold mb-7'>NotesKu</h1>
        </div>

        <div className='basis-[100%] px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <main>
            <h1>Halaman Tidak Ditemukan</h1>
            <Link to={'/'}>Kembali ke Halaman Utama</Link>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default NotFoundPage