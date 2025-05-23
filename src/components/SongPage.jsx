import { useParams } from 'react-router-dom';

const mockSongs = {
  '1': {
    title: 'NU-VIKINGS',
    image: '/placeholder.jpg',
    lyrics: `From fjord to firewall\nWe ride the noise\nSteel strings burning\nIn binary voids`,
    production: 'Written & produced by Corpus.json',
    members: ['Alice - Guitar', 'You - Everything Else'],
    preview: '/nu-vikings-preview.mp3', // 45s preview
  },
  '2': {
    title: 'rm -rf/our.love',
    image: '/placeholder.jpg',
    lyrics: `You typed too fast\nDeleted our past\nNo backups for hearts\nJust logs of pain`,
    production: 'Engineered by Corpus.json',
    members: ['You - Vocals, Bass', 'Ghost - Keys'],
    preview: '/rm-preview.mp3',
  },
  // Add more mock songs as needed
};

function SongPage() {
  const { id } = useParams();
  const song = mockSongs[id];

  if (!song) return <p style={{ color: '#fff' }}>Song not found.</p>;

  return (
    <div style={styles.page}>
      <img src={song.image} alt={song.title} style={styles.image} />
      <h1 style={styles.title}>{song.title}</h1>
      <pre style={styles.lyrics}>{song.lyrics}</pre>

      <div style={styles.meta}>
        <p><strong>Production:</strong> {song.production}</p>
        <p><strong>Members:</strong> {song.members.join(', ')}</p>
      </div>

      <audio controls style={styles.audio}>
        <source src={song.preview} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button style={styles.button}>BUY THE SONG</button>
    </div>
  );
}

const styles = {
  page: {
    color: '#fff',
    backgroundColor: '#000',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: "'Aldrich', sans-serif",
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2rem',
    color: '#ff0033',
    marginBottom: '1rem',
  },
  lyrics: {
    whiteSpace: 'pre-wrap',
    margin: '1.5rem 0',
    color: '#ccc',
  },
  meta: {
    margin: '1rem 0',
    fontSize: '0.95rem',
    color: '#aaa',
  },
  audio: {
    marginTop: '1rem',
    width: '100%',
  },
  button: {
    marginTop: '1.5rem',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#ff0033',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SongPage;
