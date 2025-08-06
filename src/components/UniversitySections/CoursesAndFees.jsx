import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CoursesAndFees = () => {
  const courses = [
    {
      name: 'B.Tech - Computer Science and Engineering (CSE)',
      totalFees: '₹9,46,800',
      yearlyFees: '₹2,36,700',
      duration: '4 Years',
      intake: 480,
      applyLink: 'https://dtu.ac.in/admissions',
    },
    {
      name: 'B.Tech - Electronics and Communication Engineering (ECE)',
      totalFees: '₹9,00,000',
      yearlyFees: '₹2,25,000',
      duration: '4 Years',
      intake: 360,
      applyLink: 'https://dtu.ac.in/admissions',
    },
    {
      name: 'M.Tech - Computer Science',
      totalFees: '₹3,20,000',
      yearlyFees: '₹1,60,000',
      duration: '2 Years',
      intake: 60,
      applyLink: 'https://dtu.ac.in/admissions',
    },
    {
      name: 'MBA',
      totalFees: '₹4,00,000',
      yearlyFees: '₹2,00,000',
      duration: '2 Years',
      intake: 120,
      applyLink: 'https://dtu.ac.in/admissions',
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Courses & Fees</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-sm font-semibold">Course Name</th>
              <th className="p-3 text-sm font-semibold">Total Fees</th>
              <th className="p-3 text-sm font-semibold">Yearly Fees</th>
              <th className="p-3 text-sm font-semibold">Duration</th>
              <th className="p-3 text-sm font-semibold">Intake</th>
              <th className="p-3 text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className={`${
                  index === 0
                    ? 'bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800'
                    : 'hover:bg-blue-50 dark:hover:bg-gray-700'
                } border-b dark:border-gray-700`}
              >
                <td className="p-3 text-gray-800 dark:text-gray-300">{course.name}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{course.totalFees}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{course.yearlyFees}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{course.duration}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{course.intake}</td>
                <td className="p-3">
                  <a
                    href={course.applyLink}
                    className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-500 text-sm font-semibold flex items-center space-x-1 inline-flex"
                    aria-label={`Apply for ${course.name}`}
                  >
                    <span>Apply</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesAndFees;
