import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import SearchNotes from '../components/SearchNotes';
import { archiveNote, deleteNote, getAllNotes, getNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import { PiArchiveBoxLight } from "react-icons/pi";
import { ListGroup, Tooltip } from 'flowbite-react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiArchiveIn } from "react-icons/bi";
import { BiArchiveOut } from "react-icons/bi";

const DetailNotePage = ({ notes, setNotes}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notesById, setNotesById] = useState(getNote(id));
  const [archived, setArchived] = useState(notesById.archived);

  console.log("Notes", notes)

  const searchNotesHandler = (search) => {
    setQuerySearch(search);
  }

  const deleteNoteHandler = (id) => {
    deleteNote(id);
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
    navigate('/');
  }

  const archiveNoteHandler = (id) => {
    if(archived){
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setArchived(!archived)
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  }

  return (
    <>
      <div className='bg-white min-h-screen px-2 flex'>
        <div className=' px-4 py-3 border-r border-slate-400 fixed left-0 top-0 bg-white h-full'>
          <h1 className='font-bold mb-7'>NotesKu</h1>
        </div>

        <div className='basis-[100%] relative px-4 py-3 pl-[120px] sm:pl-[130px] md:pl-[160px]'>
          <main>
            <article className={`${notesById.backgroundColor} p-2 rounded-lg`}>
              <div className=''>
                <h1 className='font-semibold text-center text-2xl mb-5'>{notesById.title}</h1>
                <p>{showFormattedDate(notesById.createdAt)}</p>
                <p>{notesById.body}</p>
              </div>
            </article>
          </main>

          <div className='flex p-4 items-center gap-5 absolute bottom-0 right-0'>
            {
              archived ? (
                <Tooltip content='Kembalikan'>
                  <button className='p-3 border-[3px] border-[#4B5563] rounded-full' onClick={() => archiveNoteHandler(id)}>
                    <BiArchiveOut size={30}/>
                  </button>
                </Tooltip>
              ) :
              (
                <Tooltip content='Arsipkan'>
                  <button className='p-3 border-[3px] border-[#4B5563] rounded-full' onClick={() => archiveNoteHandler(id)}>
                    <BiArchiveIn size={30}/>
                  </button>
                </Tooltip>
              )
            }
            
            <Tooltip content='Hapus'>
              <button className='p-3 border-[3px] border-[#4B5563] rounded-full' onClick={() => deleteNoteHandler(id)}>
                <RiDeleteBin6Line size={30}/>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default DetailNotePage