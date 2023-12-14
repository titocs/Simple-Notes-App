import { showFormattedDate } from '../../utils';
import PropTypes from 'prop-types';
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Info = ({ id, createdAt }) => {
  return (
    <div className='flex justify-between items-center border-t border-t-black mt-[10px] border-dashed py-1'>
      <div className='text-xs'>{ showFormattedDate(createdAt) }</div>
      <Link to={`/notes/${id}`}>
        <RiExternalLinkFill size={20}></RiExternalLinkFill>
      </Link>
    </div>
  )
}

Info.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  createdAt: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}

export default Info