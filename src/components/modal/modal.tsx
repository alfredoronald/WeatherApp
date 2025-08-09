import { useState } from 'react';
import Navbar from '../navbar/navbar';
import './modal.css';

const Modal = () => {
    const [showModal, setShowModal] = useState(true);
    

  return (
    <div className={`modal-container${!showModal ? ' hidden' : ''}`}>
      <div onClick={() => setShowModal(!showModal)} className="modal-button">
        {showModal ? <img src="/src/assets/icons/arrowdown.svg"/> : <img src="/src/assets/icons/arrowup.svg"/>}
      </div>
      <Navbar />
    </div>
  );
};

export default Modal;
