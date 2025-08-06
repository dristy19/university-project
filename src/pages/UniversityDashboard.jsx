import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBell,
  faMoon,
  faSun,
  faCompass,
  faRightToBracket,
  faUserPlus,
  faArrowRightFromBracket,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import Info from '../components/UniversitySections/Info';
import CoursesAndFees from '../components/UniversitySections/CoursesAndFees';
import Cutoff from '../components/UniversitySections/Cutoff';
import Placement from '../components/UniversitySections/Placements';
import Facilities from '../components/UniversitySections/Facilities';
import Admission from '../components/UniversitySections/Admission';
import './universityDashboard.css';

function UniversityDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState('Info');

  const dropdownRef = useRef(null);
  const scrollRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 w-screen max-w-full`}>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex items-center justify-between w-full">
        <div className="flex items-center">
          <img
            src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg"
            alt="Logo"
            className="h-12 mr-4"
          />
          <span className="text-2xl font-bold">Uni Hub</span>
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg border-2 border-white dark:border-gray-300 text-black focus:outline-none focus:border-yellow-400 transition-all duration-300"
          />
        </div>

        <div className="flex items-center space-x-3 relative">
          <button className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-lg hover:bg-yellow-500 text-sm">
            Write a Review
          </button>
          <button className="flex items-center bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 text-sm">
            <FontAwesomeIcon icon={faCompass} className="mr-1" />
            Explore
          </button>
          <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600" onClick={toggleTheme}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          {/* User dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="bg-blue-500 p-2 rounded-full hover:bg-blue-600"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-md p-3 z-50">
                {user ? (
                  <>
                    <p className="text-sm mb-2">Signed in as <br /><strong>{user.name}</strong></p>
                    <button
                      className="flex items-center w-full text-left text-sm hover:text-red-500"
                      onClick={() => setUser(null)}
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex items-center w-full text-left mb-2 text-sm hover:text-blue-600">
                      <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                      Login
                    </button>
                    <button className="flex items-center w-full text-left text-sm hover:text-blue-600">
                      <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <select className="bg-blue-800 p-2 rounded-lg text-white hover:bg-blue-900 text-sm">
            <option>All Courses</option>
            <option>B.Tech</option>
            <option>MBA</option>
            <option>BAMS</option>
            <option>BPharma</option>
            <option>BCA</option>
            <option>BBA</option>
          </select>
        </div>
      </nav>

      {/* University Details Banner */}
      <div
        className="bg-cover bg-center h-78 w-full flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://sustainability.umd.edu/sites/default/files/styles/optimized/public/2024-08/HornbakePlaza_10242017_9203-7%20%281%29.jpg?itok=k2UhA8Xt')",
        }}
      >
        <div className="container mx-auto p-2 text-white">
          <div className="lower-blur bg-white/10 rounded-lg p-8 shadow-md flex items-center justify-center space-x-4">
            <img
              src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg"
              alt="University Logo"
              className="h-16 rounded-md"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Your University Name</h1>
              <p className="text-sm text-white/80">© City, Country | Est 1952</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2">
              <span className="bg-blue-500 px-2 py-1 rounded text-xs text-white">AICTE</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-xs text-white">NAAC Grade A</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-xs text-white">NIRF</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-xs text-white">NBA</span>
              <span className="bg-blue-500 px-2 py-1 rounded text-xs text-white">Government</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-yellow-400 px-2 py-1 rounded text-xs">8 / 10 reviews</span>
              <span className="bg-yellow-400 px-2 py-1 rounded text-xs">1 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto p-4">
        <div className="relative flex items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 mr-2"
            onClick={scrollLeft}
            title="Scroll Left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto gap-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              'Info',
              'Courses & Fees',
              'Cutoff',
              'Placements',
              'Facilities',
              'Rankings',
              'Gallery',
              'Admission',
              'Reviews',
              'News & Articles',
              'Scholarship',
              'Q&A',
            ].map((section, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-[150px] h-[40px] rounded-lg shadow-md text-[14px] font-semibold flex items-center justify-center transition-all duration-200 ${
                  activeSection === section
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() => handleButtonClick(section)}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 ml-2"
            onClick={scrollRight}
            title="Scroll Right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button className="bg-yellow-400 text-blue-900 px-2 py-1 rounded hover:bg-yellow-500 text-xs">
            Apply For Admission
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs">
            Download Brochure
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs">
            More Nearby Colleges
          </button>
        </div>

        {/* Render dynamic section based on selection */}
        <div className="mt-6">
          {activeSection === 'Info' && <Info />}
          {activeSection === 'Courses & Fees' && <CoursesAndFees />}
          {activeSection === 'Cutoff' && <Cutoff />}
          {activeSection === 'Placements' && <Placement />}
          {activeSection === 'Facilities' && <Facilities />}
          {activeSection === 'Admission' && <Admission />}
        </div>
      </div>
    </div>
  );
}

export default UniversityDashboard;
