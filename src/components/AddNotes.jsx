import {IoIosAddCircle} from 'react-icons/io';
import { Tooltip } from 'flowbite-react';
import FormModal from './FormModal';
import { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

const AddNotes = ({ setNotesAPI }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const { locale } = useContext(LocaleContext);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <div className='mb-7'>
        <Fade left>
          <div className={`transition duration-300 w-[40px] rounded-[8rem] mx-auto`}>
            <Tooltip style={currentTheme === 'light' ? 'dark' : 'light'} content={`${locale === 'id' ? 'Tambah Catatan' : 'Add Note'}`}>
              <button className='mx-auto block text-center text-xs' onClick={() => setOpenModal('form-elements')}>
                <IconContext.Provider value={{ color: currentTheme === 'light' ? '#4B5563' : '#ffff' }} >
                  <IoIosAddCircle size={40} />
                </IconContext.Provider>
              </button>
            </Tooltip>
          </div>
        </Fade>

        <FormModal
          openModal={openModal}
          setNotesAPI={setNotesAPI}
          setOpenModal={setOpenModal}></FormModal>
      </div>
    </>
  );
};

AddNotes.propTypes = {
  setNotesAPI: PropTypes.func.isRequired
};

export default AddNotes;