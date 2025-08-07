import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-4">
      <h2 className="text-sm font-bold mb-2 text-blue-700 dark:text-yellow-300">More Nearby Colleges</h2>
      <ul className="space-y-2">
        <li className="text-sm flex items-center">
          <img src="aiims-logo.png" alt="AIIMS" className="w-6 h-6 mr-2" /> AIIMS - All India Institute Of Medical Science, Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="guru-gobind-logo.png" alt="GGSIPU" className="w-6 h-6 mr-2" /> Guru Gobind Singh Indraprastha University, New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="gtbit-logo.png" alt="GTBIT" className="w-6 h-6 mr-2" /> Guru Tegh Bahadur Institute of Technology [GTBIT], New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="jmi-logo.png" alt="JMI" className="w-6 h-6 mr-2" /> Jamia Millia Islamia [JMI], New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="iitm-logo.png" alt="IITM" className="w-6 h-6 mr-2" /> Indraprastha Institute of Technology and Management, (IITM) New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="maids-logo.png" alt="MAIDS" className="w-6 h-6 mr-2" /> Maulana Azad Institute of Dental Sciences, (MAIDS) Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="nlu-logo.png" alt="NLU" className="w-6 h-6 mr-2" /> National Law University [NLU], New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="iift-logo.png" alt="IIFT" className="w-6 h-6 mr-2" /> Indian Institute of Foreign Trade [IIFT] New Delhi
        </li>
        <li className="text-sm flex items-center">
          <img src="nitd-logo.png" alt="NITD" className="w-6 h-6 mr-2" /> NIT Delhi - National Institute of Technology
        </li>
        <li className="text-sm flex items-center">
          <img src="iitd-logo.png" alt="IITD" className="w-6 h-6 mr-2" /> IIT Delhi - Indian Institute of Technology [IITD], New Delhi
        </li>
      </ul>
      <div className="mt-4">
        <h2 className="text-sm font-bold mb-2 text-blue-700 dark:text-yellow-300">Photos</h2>
        <div className="grid grid-cols-2 gap-2">
          <img src="photo1.jpg" alt="Campus" className="w-full h-24 object-cover" />
          <img src="photo2.jpg" alt="Event" className="w-full h-24 object-cover" />
        </div>
        <button className="text-sm text-blue-600 dark:text-yellow-300 mt-2">show more</button>
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-bold mb-2 text-blue-700 dark:text-yellow-300">Latest Updates</h2>
        <ul className="space-y-2">
          <li className="text-sm">
            <span className="text-blue-600 dark:text-yellow-300">Top 5 Scholarship for MBBS Students</span> - NEW
            <p className="text-xs text-gray-600 dark:text-gray-400">Ab MBBS ki padhai ho jaye, sarkar de r... yadi aap ne kaalifai student hein to aapko koi...</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">© Jul 19, 2025</span>
          </li>
          <li className="text-sm">
            <span className="text-blue-600 dark:text-yellow-300">NEET (UG) 2025 Result Live: The list of top 10 candidates</span>
            <p className="text-xs text-gray-600 dark:text-gray-400">Mahesh Kumar from Rajasthan Secured first rank with 99 percentile scor...</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">© Jun 14, 2025</span>
          </li>
          <li className="text-sm">
            <span className="text-blue-600 dark:text-yellow-300">NEET UG 2025 Result LIVE Updates: Scorecards Released, Here's How To...</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">© Jun 14, 2025</span>
          </li>
          <li className="text-sm">
            <span className="text-blue-600 dark:text-yellow-300">jeemain.nta.nic.in 2025: NTA to Declare JEE Main Session 2 Result...</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">© Apr 18, 2025</span>
          </li>
          <li className="text-sm">
            <span className="text-blue-600 dark:text-yellow-300">JEE Main Session 2 City Intimation Slip 2025 (OUT): jeemain.nta.nic.in</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">© Mar 21, 2025</span>
          </li>
        </ul>
        <button className="text-sm text-blue-600 dark:text-yellow-300 mt-2">View All Updates</button>
      </div>
    </aside>
  );
};

export default Sidebar;