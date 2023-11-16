import React from 'react';

const WhatsApp = ({ phoneNumber }) => {
  const openWhatsAppChat = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <button
        onClick={openWhatsAppChat}
        className="bg-green-500 text-white p-4 rounded-full focus:outline-none"
      >
        {/* You can replace this with a WhatsApp icon */}
      <img
      className='h-12 w-12'
       src = "/whatsapp-icon.png" alt="whatsapp-icon" />
      </button>
    </div>
  );
};

export default WhatsApp;
