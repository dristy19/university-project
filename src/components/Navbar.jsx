// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faBookOpen, faGraduationCap, faQuestionCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight">🎓 University Hub</h1>
      <div className="flex gap-6 text-sm text-gray-700 items-center">
        <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/colleges" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faUniversity} /> Colleges
        </Link>
        <Link to="/university-register" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faUniversity} /> University Registration
        </Link>
        <Link to="/exams" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faBookOpen} /> Exams
        </Link>
        <Link to="/scholarships" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faGraduationCap} /> Scholarships
        </Link>
        <Link to="/qa" className="hover:text-blue-600 flex items-center gap-1">
          <FontAwesomeIcon icon={faQuestionCircle} /> Q&A
        </Link>
        <Link to="/student-register" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm font-medium">
          <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
