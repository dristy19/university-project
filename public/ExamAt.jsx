import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, FileSearch, Bell } from "lucide-react";

export default function ExamAlertsNotifications() {
  const [examData, setExamData] = useState([]);
  const [results, setResults] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
          <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
               Exam Alerts & Notifications
        </h1>
        <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
      </div>

        {/* Upcoming Exams */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-blue-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-400 inline-block">
              Upcoming Exams
            </h2>
          </div>

          <label className="block mb-2 font-medium text-gray-700">Exam Name</label>
          <input
            type="text"
            placeholder="Enter exam name"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-2 font-medium text-gray-700">Exam Date</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-2 font-medium text-gray-700">Syllabus Link</label>
          <input
            type="url"
            placeholder="Enter syllabus URL"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-2 font-medium text-gray-700">Application Deadline</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        {/* Result Announcements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileSearch className="text-green-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-green-400 inline-block">
              Result Announcements
            </h2>
          </div>

          <label className="block mb-2 font-medium text-gray-700">Exam Name</label>
          <input
            type="text"
            placeholder="Enter exam name"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-400"
          />

          <label className="block mb-2 font-medium text-gray-700">Result Date</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-400"
          />

          <label className="block mb-2 font-medium text-gray-700">Result Link</label>
          <input
            type="url"
            placeholder="Enter result URL"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </motion.div>

        {/* Platform Notifications */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-purple-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-400 inline-block">
              Platform Notifications
            </h2>
          </div>

          <label className="block mb-2 font-medium text-gray-700">Notification Type</label>
          <select className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-purple-400">
            <option>-- Select --</option>
            <option>New Message</option>
            <option>Profile View</option>
            <option>Scholarship Update</option>
          </select>

          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Enter notification message"
            rows="3"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-400"
          />
        </motion.div>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition">
            Save / Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
