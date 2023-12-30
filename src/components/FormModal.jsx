import { Modal } from 'flowbite-react';
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { addNote, getActiveNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

const FormModal = ({ openModal, setNotesAPI, setOpenModal }) => {
  const [note, setNote] = useState({ title: '', body: ''});
  const [sizeChar, setSizeChar] = useState(50);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    if (openModal === 'form-elements') {
      setNote({ title: '', body: '' });
      setSizeChar(50);
    }
  }, [openModal]);

  const onChangeTitleHandler = (event) => {
    const newTitle = event.target.value;
    const remainingChars = 50 - newTitle.length;

    if(remainingChars >= 0){
      setNote((prevState) => ({ ...prevState, title: newTitle }));
      setSizeChar(remainingChars);
    }
  };

  const onInputHandler = (event) => {
    setNote((prevState) => ({ ...prevState, body: event.target.innerHTML }));
  };

  const onAddNoteHandler = async (notes) => {
    addNote(notes);
    try {
      const { data } = await getActiveNotes();
      setNotesAPI(data);
    } catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newNote = {
      title: note.title,
      body: note.body
    };

    onAddNoteHandler(newNote);
    setOpenModal(undefined);
  };

  return (
    <>
      <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Header className='bg-white rounded-t-md' />
        <Modal.Body className='bg-white rounded-b-md'>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 text-center">{ locale === 'id' ? 'Bikin Catatan Baru' : 'Create New Notes'}</h3>
              <div>
                <div className='overflow-hidden mb-1'>
                  <input
                    className='w-full rounded-md focus:ring-0 focus:outline-none'
                    type="text"
                    placeholder={ locale === 'id' ? 'Ini judul catatan lo...' : 'This is your title...'}
                    value={note.title} onChange={onChangeTitleHandler}
                    required />
                </div>
                <div className='text-xs'>{locale === 'id' ? 'Sisa karakter:' : 'Remain Characters:'} <span className={`${sizeChar <= 3 ? 'text-red-500' : 'text-black'} font-bold`}>{sizeChar}</span></div>
              </div>
              <div>
                <div className='h-[12rem] rounded-md w-full border border-slate-600 p-2 focus:outline-none' contentEditable onInput={onInputHandler} placeholder={ locale === 'id' ? 'Ini body catatan lo...' : 'This is your body`s note'}></div>
              </div>
              <button className='border border-slate-600 block w-full py-3 rounded-lg' type='submit'>{ locale === 'id' ? 'Bikin Catatan' : 'Create Note'}</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

FormModal.propTypes = {
  openModal: PropTypes.string,
  setNotesAPI: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired
};

export default FormModal;