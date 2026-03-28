import React from 'react';
import './index.css'

const Modal = ({ detail, onClose }) => {
  // If there's no data, don't render anything
  if (!detail) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      {/* stopPropagation prevents the modal from closing when clicking inside the content */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        {/* Display the actual detail of the card here */}
        <h2>{detail.nameOfArtist}</h2>
        <img src={detail.image} alt={detail.title} style={{ width: '100%' }} />
        <p>{detail.duration}</p>
      </div>
    </div>
  );
};

export default Modal;
