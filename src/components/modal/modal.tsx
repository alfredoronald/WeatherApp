import { useState } from 'react';
import Navbar from '../navbar/navbar';
import RegtangleIcon from '../../assets/icons/rectangule.svg';
import './modal.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={`modal-container${!showModal ? ' hidden' : ''}`}>
      <div onClick={() => setShowModal(!showModal)} className="modal-button">
        <img src={RegtangleIcon} alt="regtangle icon control modal" />
      </div>
      <Navbar />
    </div>
  );
};

export default Modal;
