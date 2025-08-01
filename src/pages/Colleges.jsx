import React, { useState } from 'react';
import CollegeCard from '../components/CollegeCard';
import { colleges } from '../data/mockData';

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Top Colleges in India</h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by college name..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* College Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <CollegeCard key={index} college={college} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No colleges found for "{searchTerm}".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
