function Howler() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Howler</h1>
      <p style={styles.text}>
        Howler is the signal, not the noise. A minimalist music interface for night coders. Launch soon...
      </p>
      <p style={styles.text}>Check back for exclusive previews and lyric layers embedded as code.</p>
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
    marginBottom: '1rem',
    textAlign: 'center',
  },
};

export default Howler;
