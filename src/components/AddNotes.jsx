import React from 'react'
import {IoIosAddCircle} from 'react-icons/io'
import { Tooltip } from 'flowbite-react';
import FormModal from './FormModal';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { IconContext } from 'react-icons';
import ColorPicker from './ColorPicker';

const AddNotes = ({ addNotesHandler, setNotesData }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const [buttonColor, setButtonColor] = useState('');
  const [colorPicker, setColorPicker] = useState(false);

  const openColorPicker = () => {
    setColorPicker(!colorPicker);
  }

  return (
    <>
      <div className=''>
        <Fade left>
          <div className={`bg-gray-600 ${colorPicker ? 'h-[210px]' : 'h-[40px]'} transition duration-300 w-[40px] rounded-[8rem] mx-auto`}>
            <Tooltip content='Tambah Catatan'>
              <button className='mx-auto block text-center text-xs' onClick={openColorPicker}>
                <IconContext.Provider value={{ color: '#ffff'}} >
                  <IoIosAddCircle size={40} />
                </IconContext.Provider>
              </button>
            </Tooltip>

            <ColorPicker
              colorPicker={colorPicker}
              setButtonColor={setButtonColor}
              setOpenModal={setOpenModal}>
            </ColorPicker>
          </div>
        </Fade>

        <FormModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          addNotesHandler={addNotesHandler}
          buttonColor={buttonColor}
          setNotesData={setNotesData}></FormModal>
      </div>
    </>
  )
}

export default AddNotes