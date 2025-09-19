import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"><h2>Audit Company</h2></div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}
