import React from 'react';

const blogs = [
  { title: "Latest Tax Updates", date: "2025-09-01" },
  { title: "Audit Best Practices", date: "2025-08-20" },
  { title: "Financial Planning Tips", date: "2025-08-10" }
];

export default function Blogs() {
  return (
    <div className="container">
      <h1 className="section-title">Blogs</h1>
      <div className="grid">
        {blogs.map((b, index) => (
          <div className="card" key={index}>
            <h3>{b.title}</h3>
            <p>Date: {b.date}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
