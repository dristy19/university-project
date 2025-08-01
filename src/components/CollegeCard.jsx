// src/components/CollegeCard.jsx
import React from 'react';

const CollegeCard = ({ college }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold">{college.name}</h2>
      <p className="text-gray-600">{college.location}</p>
      <p className="mt-2 text-sm">{college.description}</p>
    </div>
  );
};

export default CollegeCard;
