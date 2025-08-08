import React, { useState } from 'react';

const QA = ({ isLoggedIn }) => {
  const [query, setQuery] = useState('');
  const [answers, setAnswers] = useState([
    { question: 'What is the full form of DTU?', answer: 'DTU stands for Delhi Technological University.' },
    { question: 'When was DTU established?', answer: 'DTU was established in 1941 as Delhi College of Engineering (DCE) and became Delhi Technological University (DTU) in 2008.' },
    { question: 'Where is DTU located?', answer: 'DTU is located in Rohini, Delhi, India.' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) return;
    const newAnswer = { question: query, answer: 'Answer will be provided soon.' };
    setAnswers([...answers, newAnswer]);
    setQuery('');
  };

  const nearbyColleges = [
    { name: 'AIMS - All India Institute of Medical Science, Delhi', photo: 'https://via.placeholder.com/100' },
    { name: 'Guru Gobind Singh Indraprastha University', photo: 'https://via.placeholder.com/100' },
    { name: 'Guru Teg Bahadur Institute of Technology', photo: 'https://via.placeholder.com/100' },
  ];

  const latestUpdates = [
    { title: 'Top 5 Scholarships for MBBS Students NEW', date: 'Jul 19, 2025' },
    { title: 'NEET (UG) 2025 Result LIVE Updates', date: 'Jun 14, 2025' },
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* <div className={`gallery-container ${darkMode ? 'dark' : ''}`}> */}
      {/* Q&A Section */}
      <div className="w-full md:w-2/3 bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Ask a Question:</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your query"
            className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-800 text-[var(--text-color)]"
            disabled={!isLoggedIn}
          />
          {!isLoggedIn && <p className="text-red-500 text-sm">Please log in to ask a question.</p>}
          <button
            type="submit"
            className="px-4 py-2 bg-[var(--button-primary)] text-white rounded hover:bg-[var(--button-hover)] disabled:bg-gray-400"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
        {answers.map((qa, index) => (
          <div key={index} className="mb-4 p-2 border-b">
            <p className="font-medium">{qa.question}</p>
            <p className="text-sm">{qa.answer}</p>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">More Nearby Colleges</h3>
          {nearbyColleges.map((college, index) => (
            <div key={index} className="flex items-center mb-2">
              <img src={college.photo} alt={college.name} className="w-12 h-12 mr-2" />
              <span>{college.name}</span>
            </div>
          ))}
          <a href="#" className="text-[var(--button-accent)] text-sm">show more</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
          {latestUpdates.map((update, index) => (
            <div key={index} className="mb-2">
              <p className="text-sm">{update.title}</p>
              <p className="text-xs text-gray-500">{update.date}</p>
            </div>
          ))}
          <a href="#" className="text-[var(--button-accent)] text-sm">View All Updates</a>
        </div>
      </aside>
    </div>
  );
};

export default QA;