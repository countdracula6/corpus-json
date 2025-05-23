function About() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>About Corpus.json</h1>
      <p style={styles.text}>
        A solo act in a networked world. <strong>Corpus.json</strong> merges sound and structure. Every note, every glitch, every silence — intentional. 
        Born from underground circuits and sleepless nights. This is not a band — it’s a broadcast.
      </p>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#000',
    color: '#ccc',
    padding: '3rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: "'Aldrich', sans-serif",
    lineHeight: '1.8',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2rem',
    color: '#ff0033',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  text: {
    marginBottom: '1.2rem',
  },
};

export default About;
