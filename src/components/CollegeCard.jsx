import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  return (
    <Link to={`/college/${college.id}`} role="button" tabIndex={0} className="block">
      <div className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <img src={college.logo} alt={college.name} className="h-32 w-full object-contain mb-4" />
        <h3 className="text-lg font-bold">{college.name}</h3>
        <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
        <p className="text-sm text-gray-600">{college.streams}</p>
      </div>
    </Link>
  );
};

export default CollegeCard;