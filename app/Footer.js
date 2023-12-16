"use client"
import { useState } from 'react';
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="flex justify-center items-center space-x-4 py-4">
      <div onClick={() => handleRedirect('https://www.instagram.com/goosesgeeses')} className="cursor-pointer">
        <FaInstagram className="text-lg text-gray-600 hover:text-gray-800" />
      </div>
      <div onClick={() => handleRedirect('https://www.youtube.com/@evaknowles/videos')} className="cursor-pointer">
        <FaYoutube className="text-lg text-gray-600 hover:text-gray-800" />
      </div>
      <div onClick={() => setShowEmail(!showEmail)} className="cursor-pointer">
        <FaEnvelope className="text-lg text-gray-600" />
      </div>
      {showEmail && <span className="text-sm text-gray-600">email@example.com</span>}
    </footer>
  );
};

export default Footer;