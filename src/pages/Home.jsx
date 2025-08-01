// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-16 text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-sm">
        Welcome to <span className="text-blue-500">The University Hub</span>
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl">
        Find top colleges, prepare for entrance exams, discover scholarships, and shape your career — all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
        <Link to="/colleges" className="bg-white border border-blue-200 shadow-sm rounded-xl px-6 py-8 text-blue-700 hover:bg-blue-50 transition group">
          <FontAwesomeIcon icon={faUniversity} size="2x" className="mb-4 text-blue-600 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2">Explore Colleges</h3>
          <p className="text-sm text-gray-600">Browse the best institutions and programs tailored to your goals.</p>
        </Link>

        <Link to="/exams" className="bg-white border border-blue-200 shadow-sm rounded-xl px-6 py-8 text-blue-700 hover:bg-blue-50 transition group">
          <FontAwesomeIcon icon={faBookOpen} size="2x" className="mb-4 text-blue-600 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2">View Exams</h3>
          <p className="text-sm text-gray-600">Stay up-to-date with upcoming entrance exams and notifications.</p>
        </Link>

        <Link to="/student-register" className="bg-white border border-green-200 shadow-sm rounded-xl px-6 py-8 text-green-700 hover:bg-green-50 transition group">
          <FontAwesomeIcon icon={faUserGraduate} size="2x" className="mb-4 text-green-600 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2">Register Now</h3>
          <p className="text-sm text-gray-600">Sign up and get personalized guidance and updates instantly.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
