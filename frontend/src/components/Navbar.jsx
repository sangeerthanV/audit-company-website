import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/services">Services</Link> | 
      <Link to="/clients">Clients</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/blogs">Blogs</Link> | 
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
