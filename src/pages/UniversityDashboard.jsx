import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faLink, faUser } from '@fortawesome/free-solid-svg-icons';

const UniversityDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar is assumed to be included in a parent component */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">University Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Announcements Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faBullhorn} className="h-5 w-5 text-blue-600" />
              Announcements
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700">
                <span className="font-semibold">Midterm Exams:</span> Scheduled for October 15-20, 2025.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Registration Deadline:</span> November 1, 2025 for Spring Semester.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Campus Event:</span> Annual Career Fair on October 25, 2025.
              </li>
            </ul>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="h-5 w-5 text-blue-600" />
              Upcoming Events
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700">
                <span className="font-semibold">Oct 10, 2025:</span> Guest Lecture - AI in Education
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Oct 12, 2025:</span> Student Council Meeting
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Oct 15, 2025:</span> Sports Fest Kickoff
              </li>
            </ul>
          </div>

          {/* User Profile Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-blue-600" />
              Profile Summary
            </h2>
            <div className="text-gray-700">
              <p><span className="font-semibold">Name:</span> John Doe</p>
              <p><span className="font-semibold">Student ID:</span> UD123456</p>
              <p><span className="font-semibold">Major:</span> Computer Science</p>
              <p><span className="font-semibold">Year:</span> Junior</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faLink} className="h-5 w-5 text-blue-600" />
            Quick Links
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <a href="/courses" className="text-blue-600 hover:text-blue-800 font-medium">Course Catalog</a>
            <a href="/grades" className="text-blue-600 hover:text-blue-800 font-medium">Grades</a>
            <a href="/schedule" className="text-blue-600 hover:text-blue-800 font-medium">Schedule</a>
            <a href="/library" className="text-blue-600 hover:text-blue-800 font-medium">Library Resources</a>
            <a href="/financial-aid" className="text-blue-600 hover:text-blue-800 font-medium">Financial Aid</a>
            <a href="/advising" className="text-blue-600 hover:text-blue-800 font-medium">Academic Advising</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDashboard;