import React, { useState, useEffect } from 'react';
import CollegeCard from '../components/CollegeCard';
import { colleges as mockColleges } from '../data/mockData';

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const savedUniversities = JSON.parse(localStorage.getItem('universities')) || [];
    const combined = [...mockColleges, ...savedUniversities];
    setColleges(combined);
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3656E5] mb-8 text-center">Top Colleges in India</h2>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by college name..."
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3656E5] text-gray-700"
          />
        </div>

        {/* College Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))
            ) : (
              <p className="text-gray-600 text-lg text-center col-span-full">No colleges found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;