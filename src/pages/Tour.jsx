function Tour() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Tour</h1>
      <ul style={styles.list}>
        <li>🗓 May 28 – Reykjavik, Iceland (Digital Mirage)</li>
        <li>🗓 June 10 – São Paulo, Brazil (GlitchBar Showcase)</li>
        <li>🗓 July 2 – Paris, France (Underground Transmission)</li>
        <li>🗓 Aug 14 – Tokyo, Japan (NightCode Festival)</li>
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
  list: {
    listStyle: 'none',
    lineHeight: '2',
    padding: 0,
    textAlign: 'center',
  },
};

export default Tour;
