import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      
    </Router>
  );
}



export default App;
