import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('/songs.json')
      .then((res) => res.json())
      .then((data) => {
        const match = data.find((song) => song.id === id);
        setSong(match);
      });
  }, [id]);

  if (!song) {
    return <p style={{ color: '#ccc', textAlign: 'center' }}>Loading song details...</p>;
  }

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
    padding: 0,
    fontFamily: "'Aldrich', sans-serif",
    color: '#ccc',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2.5rem',
    color: '#ff0033',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  lyrics: {
    whiteSpace: 'pre-wrap',
    backgroundColor: '#111',
    padding: '2rem',
    borderRadius: '6px',
    margin: '0 auto 2rem',
    maxWidth: '800px',
    lineHeight: '1.7',
  },
  meta: {
    maxWidth: '800px',
    margin: '0 auto 2rem',
    padding: '0 1rem',
    fontSize: '0.95rem',
    color: '#aaa',
    textAlign: 'center',
  },
  audio: {
    display: 'block',
    margin: '1rem auto',
    width: '90%',
    maxWidth: '600px',
  },
  button: {
    display: 'block',
    margin: '2rem auto 4rem',
    padding: '1rem 2rem',
    backgroundColor: '#ff0033',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SongPage;
