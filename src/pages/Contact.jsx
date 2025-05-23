function Contact() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Contact</h1>
      <p style={styles.text}>For collaborations, licensing, or encrypted fan mail:</p>
      <ul style={styles.list}>
        <li>Email: <a href="mailto:corpus@json.dev" style={styles.link}>corpus@json.dev</a></li>
        <li>GitHub: <a href="https://github.com/yourprofile" target="_blank" style={styles.link}>github.com/yourprofile</a></li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#000',
    color: '#ccc',
    padding: '3rem 2rem',
    fontFamily: "'Aldrich', sans-serif",
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2rem',
    color: '#ff0033',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    textAlign: 'center',
    padding: 0,
    marginTop: '1rem',
  },
  link: {
    color: '#ff0033',
    textDecoration: 'none',
  },
};

export default Contact;
