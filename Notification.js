import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Već si uneo/la to slovo!</p>
    </div>
  )
}

export default Notification 
