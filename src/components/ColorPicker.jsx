import PropTypes from 'prop-types';

const ColorPicker = ({ colorPicker, setOpenModal, setButtonColor }) => {
  const handleClick = (btnColor) => {
    setButtonColor(btnColor);
    setOpenModal('form-elements');
  }

  return (
    <div className={`${colorPicker ? 'visible' : 'invisible'} flex flex-col gap-5 py-3`}>
      <button className='w-[18px] mx-auto rounded-full h-[18px] bg-blue-300' onClick={() => handleClick('bg-blue-300')}></button>
      <button className='w-[18px] mx-auto rounded-full h-[18px] bg-orange-300' onClick={() => handleClick('bg-orange-300')}></button>
      <button className='w-[18px] mx-auto rounded-full h-[18px] bg-lime-300' onClick={() => handleClick('bg-lime-300')}></button>
      <button className='w-[18px] mx-auto rounded-full h-[18px] bg-purple-300' onClick={() => handleClick('bg-purple-300')}></button>
    </div>
  )
}

ColorPicker.propTypes = {
  colorPicker: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setButtonColor: PropTypes.func.isRequired
}

export default ColorPicker;