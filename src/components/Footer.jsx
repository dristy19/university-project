// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm text-center py-6 mt-10">
      <div className="mb-3 flex justify-center gap-4">
        <a href="#" className="hover:text-blue-500" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="hover:text-blue-500" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="hover:text-blue-500" aria-label="Twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <p>© 2025 <span className="font-semibold">The University Hub</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
