function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} <span style={styles.brand}>Corpus.json</span> — All noise reserved.
      </p>
      <div style={styles.links}>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/howler" style={styles.link}>Howler</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000',
    borderTop: '1px solid #222',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Aldrich', sans-serif",
  },
  text: {
    color: '#777',
    marginBottom: '0.5rem',
  },
  brand: {
    color: '#ff0033',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '0.5rem',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
