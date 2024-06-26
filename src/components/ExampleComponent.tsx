import React from 'react';
import { useNotification } from '../services/notificationService';

function ExampleComponent() {
  const { addNotification } = useNotification();

  const handleButtonClick = () => {
    addNotification('Notification message');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Notification</button>
    </div>
  );
}

export default ExampleComponent;