import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import  './SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/" className='insta'>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
