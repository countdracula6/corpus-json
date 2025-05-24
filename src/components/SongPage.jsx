import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('/songs.json')
      .then(res => res.json())
      .then(data => {
        const match = data.find(song => song.id === id);
        setSong(match);
      });
  }, [id]);

  if (!song) return <p style={{ color: '#ccc', textAlign: 'center' }}>Loading song details...</p>;

  return (
    <div className="container" style={styles.page}>
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
    padding: '3rem 1.5rem',
    color: '#ccc',
    fontFamily: "'Aldrich', sans-serif",
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1.5rem',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2rem',
    color: '#ff0033',
    marginBottom: '1.5rem',
  },
  lyrics: {
    whiteSpace: 'pre-wrap',
    backgroundColor: '#111',
    padding: '1.5rem',
    borderRadius: '6px',
    margin: '2rem 0',
    color: '#ddd',
    lineHeight: '1.6',
  },
  meta: {
    fontSize: '0.95rem',
    color: '#aaa',
    marginBottom: '2rem',
  },
  audio: {
    margin: '1rem 0',
    width: '100%',
  },
  button: {
    backgroundColor: '#ff0033',
    color: '#fff',
    fontWeight: 'bold',
    padding: '0.9rem 2rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default SongPage;
