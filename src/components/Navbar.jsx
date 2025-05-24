import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <span>Corpus</span><span className="dot-json">.json</span>
        </h1>

        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/tour" className="navbar-link" onClick={() => setIsOpen(false)}>Tour</Link>
          <Link to="/howler" className="navbar-link" onClick={() => setIsOpen(false)}>Howler</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
