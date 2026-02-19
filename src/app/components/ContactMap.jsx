// src/app/components/ContactMap.jsx
import React from 'react'

const ContactMap = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.896338582476!2d7.365415673495556!3d5.120403237879337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429941f5255197%3A0x490deb2309501f6a!2s13%20Aba-Owerri%20Rd%2C%20Aba%2C%20450102%2C%20Abia!5e0!3m2!1sen!2sng!4v1771187238351!5m2!1sen!2sng" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}  // ✅ Must be object, not string
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nectarlite Technology Location"
        className="w-full h-full"
      />
    </div>
  )
}

export default ContactMap