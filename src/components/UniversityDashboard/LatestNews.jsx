// src/components/UniversityDashboard/LatestNews.jsx
import React from "react";
import "./LatestNews.css"; // Assuming you have a CSS file for styling
export default function LatestNews() {
  const news = [
    { title: "Admissions open for 2025", id: 1 },
    { title: "Scholarship applications start 1st May", id: 2 },
  ];
  return (
    <section className="ud-card ud-news">
      <h3>Latest News / Posts</h3>
      <ul>
        {news.map((n) => (
          <li key={n.id} className="ud-news-item">
            <span>{n.title}</span>
            <div className="ud-news-actions">
              <button className="ud-link" onClick={() => alert("Edit (placeholder)")}>Edit</button>
              <button className="ud-link" onClick={() => alert("Delete (placeholder)")}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
