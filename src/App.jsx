// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Exams from './pages/Exams';
import Scholarships from './pages/Scholarships';
import QAPage from './pages/QAPage';
import CourseRecommender from './pages/CourseRecommender';
import CollegePage from './pages/CollegePage';
import StudentRegister from './pages/StudentRegister';
import UniversityRegister from './pages/UniversityRegister';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/recommend" element={<CourseRecommender />} />
          <Route path="/college/:id" element={<CollegePage />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/university-register" element={<UniversityRegister />} />

          {/* Optional: 404 Page */}
          <Route path="*" element={<div className="p-6 text-center text-red-600">Page Not Found</div>} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default App;
