import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(!showAlert)
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  return (
    <div className={`alert ${showAlert ? 'block' : 'hidden'} fixed rounded-md w-fit left-0 right-0 m-auto px-3 py-2 bg-green-300 border border-green-500 gap-3 z-10 top-[26px] transition duration-300 text-sm flex items-center`}>
      <AiOutlineInfoCircle size={20} />
      Berhasil menghapus catatan
    </div>
  );
};

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  setShowAlert: PropTypes.func.isRequired
}

export default Alert