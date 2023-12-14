import {IoIosAddCircle} from 'react-icons/io'
import { Tooltip } from 'flowbite-react';
import FormModal from './FormModal';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { IconContext } from 'react-icons';
import ColorPicker from './ColorPicker';
import PropTypes from 'prop-types';

const AddNotes = ({ addNoteHandler }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const [buttonColor, setButtonColor] = useState('');
  const [colorPicker, setColorPicker] = useState(false);

  const openColorPicker = () => {
    setColorPicker(!colorPicker);
  }

  return (
    <>
      <div className='mb-7'>
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
          addNoteHandler={addNoteHandler}
          buttonColor={buttonColor}></FormModal>
      </div>
    </>
  )
}

AddNotes.propTypes = {
  addNoteHandler: PropTypes.func.isRequired
}

export default AddNotes