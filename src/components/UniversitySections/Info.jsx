import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faHome,
  faStar,
  faUniversity,
  faBook,
  faFutbol,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Delhi Technological University (DTU) Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Detail cards */}
        {[
          {
            icon: faMapMarkerAlt,
            title: 'Location',
            value: 'Delhi, India',
          },
          {
            icon: faBriefcase,
            title: 'Highest Package',
            value: '₹85.3 LPA',
            highlight: true,
          },
          {
            icon: faBriefcase,
            title: 'Average Package',
            value: '₹15.45 LPA',
          },
          {
            icon: faUsers,
            title: 'Students Placed',
            value: '1934+',
          },
          {
            icon: faHome,
            title: 'Hostel Fees',
            value: '₹72,000/year',
          },
          {
            icon: faUniversity,
            title: 'NIRF 2024 Rank',
            value: '29',
            highlight: true,
          },
          {
            icon: faBriefcase,
            title: 'Top Recruiters',
            value: 'Amazon, Google, Microsoft, TCS',
          },
          {
            icon: faGraduationCap,
            title: 'Popular Courses',
            value: 'B.Tech (CSE, ECE), M.Tech, MBA',
          },
          {
            icon: faUniversity,
            title: 'Campus Size',
            value: '164 Acres',
          },
          {
            icon: faBook,
            title: 'Library',
            value: '2,00,000+ Books, E-Resources',
          },
          {
            icon: faFutbol,
            title: 'Sports Facilities',
            value: 'Cricket Ground, Gym, Indoor Courts',
          },
          {
            icon: faStar,
            title: 'Student Rating',
            value: '⭐ 4.2/5 (843 Reviews)',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`${
              item.highlight ? 'bg-blue-100 dark:bg-blue-900' : 'bg-white dark:bg-gray-800'
            } p-4 rounded-lg shadow-md flex items-start space-x-3`}
          >
            <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              <p
                className={`${
                  item.highlight
                    ? 'text-2xl font-bold text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="https://dtu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm font-semibold"
        >
          Visit Website
        </a>
        <a
          href="mailto:admissions@dtu.ac.in"
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-500 text-sm font-semibold"
        >
          Contact Admission
        </a>
      </div>
    </div>
  );
};

export default Info;
