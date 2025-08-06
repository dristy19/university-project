import React, { useState } from 'react';

const recruiters = [
  'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://1000logos.net/wp-content/uploads/2021/04/Amazon-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tata_Consultancy_Services_Logo.svg',
  'https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png',
  'https://1000logos.net/wp-content/uploads/2020/09/Adobe-Logo.png',
  'https://1000logos.net/wp-content/uploads/2020/08/Wipro-Logo.png',
  'https://1000logos.net/wp-content/uploads/2016/10/Infosys-Logo.png',
];

const branchData = [
  { branch: 'CSE', highest: '₹45 LPA', average: '₹10 LPA' },
  { branch: 'ECE', highest: '₹28 LPA', average: '₹7.5 LPA' },
  { branch: 'IT', highest: '₹32 LPA', average: '₹8.1 LPA' },
  { branch: 'ME', highest: '₹18 LPA', average: '₹6.2 LPA' },
];

const Placement = () => {
  const [openBranch, setOpenBranch] = useState(null);

  const toggleBranch = (index) => {
    setOpenBranch(openBranch === index ? null : index);
  };

  return (
    <div className="text-white bg-gray-900 min-h-screen p-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Placement Highlights 2024</h1>
        <p className="text-lg mb-6 text-gray-300">
          Empowering Futures with Top Recruiters and Record-Breaking Packages
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-lg font-semibold">
          <div>🎯 95% Placement Rate</div>
          <div>💼 120+ Companies</div>
          <div>🏆 ₹45 LPA Highest</div>
          <div>📊 ₹7.8 LPA Average</div>
        </div>
      </section>

      {/* Recruiters Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Top Recruiters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {recruiters.map((logo, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition">
              <img src={logo} alt="Recruiter Logo" className="w-full h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Placement Stats Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Year-wise Placement Stats</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border border-gray-700">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 border">Year</th>
                <th className="p-3 border">Companies</th>
                <th className="p-3 border">Placed</th>
                <th className="p-3 border">Highest CTC</th>
                <th className="p-3 border">Avg CTC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-700">
                <td className="p-3">2024</td>
                <td className="p-3">120+</td>
                <td className="p-3">450+</td>
                <td className="p-3">₹45 LPA</td>
                <td className="p-3">₹7.8 LPA</td>
              </tr>
              <tr className="border border-gray-700">
                <td className="p-3">2023</td>
                <td className="p-3">110</td>
                <td className="p-3">420</td>
                <td className="p-3">₹38 LPA</td>
                <td className="p-3">₹6.5 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Branch Wise Accordion */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Branch-wise Placement</h2>
        <div className="max-w-2xl mx-auto">
          {branchData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleBranch(index)}
                className="w-full bg-gray-800 p-4 rounded flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold">{item.branch}</span>
                <span>{openBranch === index ? '▲' : '▼'}</span>
              </button>
              {openBranch === index && (
                <div className="bg-gray-700 p-4 rounded-b text-sm text-gray-300">
                  <p>Highest Package: <strong>{item.highest}</strong></p>
                  <p>Average Package: <strong>{item.average}</strong></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Placement;
