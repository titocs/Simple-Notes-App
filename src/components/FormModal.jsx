import { Modal } from 'flowbite-react';
import { useState, useEffect } from 'react';

const FormModal = ({ openModal, setOpenModal, addNotesHandler, buttonColor }) => {
  const [note, setNote] = useState({ title: '', body: ''});
  const [sizeChar, setSizeChar] = useState(50);

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
  }

  const onChangeBodyHandler = (event) => {
    setNote((prevState) => ({ ...prevState, body: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      title: note.title,
      body: note.body,
      backgroundColor: buttonColor,
    };

    addNotesHandler(newNote);
    setOpenModal(undefined);
  }

  return (
    <>
      <Modal color='bg-blue-300' show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 text-center dark:text-white">Buat Catatan Baru</h3>
              <div className=''>
                <div className='overflow-hidden mb-1'>
                  <input
                    className='w-full rounded-md focus:ring-0 focus:outline-none'
                    type="text"
                    placeholder='Ini adalah judul...'
                    value={note.title} onChange={onChangeTitleHandler}
                    required />
                </div>
                <div className='text-xs'>Sisa karakter: <span className={`${sizeChar <= 3 ? 'text-red-500' : 'text-black'} font-bold`}>{sizeChar}</span></div>
              </div>
              <div>
                <textarea 
                  required
                  className='w-full rounded-md focus:ring-0 focus:outline-none' 
                  cols="30"
                  rows="7"
                  value={note.body}
                  placeholder='Isi catatanmu...'
                  onChange={onChangeBodyHandler}></textarea>
              </div>
              <button className='border border-slate-600 block w-full py-3 rounded-lg' type='submit'>Buat Catatan</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FormModal;