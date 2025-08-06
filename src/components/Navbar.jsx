import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faBookOpen, faGraduationCap, faQuestionCircle, faBars, faTimes, faSignInAlt, faUser, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 tracking-tight">🎓 University Hub</h1>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
Disney
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>
      <div className={`${
        isOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 md:px-0 py-4 md:py-0 gap-4 md:gap-6 text-sm text-gray-700 items-center md:items-center transition-all duration-300`}>
        <Link
          to="/"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faHome} className="h-4 w-4" />
          Home
        </Link>
        <Link
          to="/colleges"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faUniversity} className="h-4 w-4" />
          Colleges
        </Link>
        <Link
          to="/university-register"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faUniversity} className="h-4 w-4" />
          University Registration
        </Link>
        <Link
          to="/exams"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faBookOpen} className="h-4 w-4" />
          Exams
        </Link>
        <Link
          to="/scholarships"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4" />
          Scholarships
        </Link>
        <Link
          to="/qa"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
          Q&A
        </Link>
        <Link
          to="/University-Dashboard"
          className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="h-4 w-4" />
          University Dashboard
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-1"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faSignInAlt} className="h-4 w-4" />
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-1"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;