import React, { useEffect, useState } from 'react';
import API from '../api';
import './Pages.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">Industry News & Blogs</h2>
      <p className="page-subtitle">
        Stay updated with the latest trends, news, and insights in the auditing and finance industry.
      </p>
      <div className="card-container">
        {blogs.length === 0 && (
          <>
            <div className="card">
              <h3>Importance of Financial Audits</h3>
              <p>Learn why regular audits are crucial for business growth and compliance.</p>
            </div>
            <div className="card">
              <h3>Top Audit Practices in 2025</h3>
              <p>Explore best practices and strategies used by professional auditors worldwide.</p>
            </div>
            <div className="card">
              <h3>Internal Controls You Must Know</h3>
              <p>Discover how strong internal controls protect your business from risks.</p>
            </div>
          </>
        )}
        {blogs.map(blog => (
          <div className="card" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
