import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <span>Corpus</span><span className="dot-json">.json</span>
        </h1>
        <nav className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/tour" className="navbar-link">Tour</Link>
          <Link to="/howler" className="navbar-link">Howler</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
