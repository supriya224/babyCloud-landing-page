import React from 'react';
import { useNotification } from '../services/notificationService';
import Notification from '../components/Notification';

function MyApp({ Component, pageProps }) {
  const { notifications, addNotification, removeNotification } = useNotification();

  return (
    <>
      <Component {...pageProps} />
      <div className="notification-container">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </>
  );
}

export default MyApp;