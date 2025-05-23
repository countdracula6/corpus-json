import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>
          <span style={{ color: '#fff' }}>Corpus</span>
          <span style={{ color: '#ff0033' }}>.json</span>
        </h1>
        <ul style={styles.menu}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About Me</Link></li>
          <li><Link to="/tour" style={styles.link}>Tour</Link></li>
          <li><Link to="/howler" style={styles.link}>Howler</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#000',
    padding: '1rem 2rem',
    borderBottom: '1px solid #222',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '1.8rem',
    margin: 0,
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontFamily: "'Aldrich', sans-serif",
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
