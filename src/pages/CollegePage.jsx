// src/pages/CollegePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { colleges } from '../data/mockData';

const CollegePage = () => {
  const { id } = useParams();
  const college = colleges.find(col => col.id === parseInt(id));

  if (!college) return <p className="p-6 text-center">College not found.</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">{college.name}</h2>
      <p className="text-gray-700 mb-4">{college.location}</p>
      <p>{college.description}</p>
      {/* You can add more info like courses offered, fee, placement stats, etc. */}
    </div>
  );
};

export default CollegePage;
