function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="footer-brand">Corpus.json</span> — All noise reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/countdracula6/corpus-json" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/contact">Contact</a>
          <a href="/howler">Howler</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
