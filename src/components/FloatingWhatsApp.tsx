import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '923355551234';
    const message = encodeURIComponent('Hi Shigari Mobile Shop! I would like to know more about your mobile phones and services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        className="floating-whatsapp"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us on WhatsApp"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h4>Shigari Mobile Shop</h4>
            <span>Online - 24/7 Support</span>
          </div>
          <div className="popup-body">
            <p>👋 Hello! How can we help you today?</p>
            <p>Ask us about our mobile phones, prices, PTA approval, or anything else!</p>
          </div>
          <button onClick={handleWhatsAppClick} className="btn-open-chat">
            Start Chat on WhatsApp
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
