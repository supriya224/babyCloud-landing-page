// components/Notification.js
import React from 'react';

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <button className="close-button" onClick={onClose}>X</button>
      <p>{message}</p>
    </div>
  );
};

export default Notification;