// src/components/UniversityDashboard/mockData.js
export const universityDashboardMock = {
  stats: {
    students: 1200,
    courses: 35,
    faculty: 80,
    placements: "92%"
  },
  recentApplications: [
    { id: 1, name: "Aman Gupta", course: "MBA", status: "Pending" },
    { id: 2, name: "Priya Sharma", course: "BBA", status: "Accepted" },
    { id: 3, name: "Ravi Patel", course: "BAMS", status: "Rejected" },
  ],
  announcements: [
    "Admissions open for 2025 batch",
    "Scholarship applications close on 15th Sept",
    "New hostel block inaugurated"
  ]
};
