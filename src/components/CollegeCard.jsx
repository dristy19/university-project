import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  return (
    <Link
      to={`/college/${college.id}`}
      role="button"
      tabIndex={0}
      className="block focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:ring-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 h-64 w-full max-w-xs flex flex-col items-center text-center">
        {college.logo ? (
          <img
            src={college.logo}
            alt={`${college.name} logo`}
            className="h-20 w-20 object-contain mb-4 rounded-full"
          />
        ) : (
          <div className="h-20 w-20 bg-gray-100 rounded-full mb-2 flex items-center justify-center">
            <span className="text-gray-500 text-xs">No Logo</span>
          </div>
        )}
        <h3 className="text-lg font-semibold text-[#3656E5] mb-1 line-clamp-2">{college.name}</h3>
        <p className="text-sm text-gray-600 mb-1 line-clamp-1">{college.city}, {college.state}</p>
        <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{college.streams || 'N/A'}</p>
      </div>
    </Link>
  );
};

export default CollegeCard;