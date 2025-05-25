import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetch('/songs.json')
      .then((res) => res.json())
      .then((data) => {
        const match = data.find((song) => song.id === id);
        setSong(match);
      });
  }, [id]);

  useEffect(() => {
    if (song?.lyricsUrl) {
      fetch(song.lyricsUrl)
        .then((res) => res.text())
        .then(setLyrics);
    }
  }, [song]);

  if (!song) {
    return <p style={{ color: '#ccc', textAlign: 'center' }}>Loading song details...</p>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        <img src={song.image} alt={song.title} style={styles.image} />
        <h1 style={styles.title}>{song.title}</h1>

        <pre style={styles.lyrics}>{lyrics}</pre>

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
    </div>
  );
}

const styles = {
  page: {
    padding: 0,
    fontFamily: "'Aldrich', sans-serif",
    color: '#ccc',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  image: {
    width: '100%',
    borderRadius: '6px',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '2.5rem',
    color: '#ff0033',
    textAlign: 'center',
    margin: 0,
  },
  lyrics: {
  whiteSpace: 'pre-wrap',
  backgroundColor: '#111',
  padding: '2rem',
  borderRadius: '6px',
  lineHeight: '1.7',
  width: '100%',
  fontSize: '1rem', // Adjusted size
},

  meta: {
    fontSize: '0.95rem',
    color: '#aaa',
    width: '100%',
    textAlign: 'center',
  },
  audio: {
    width: '100%',
    maxWidth: '600px',
  },
  button: {
    backgroundColor: '#ff0033',
    color: '#fff',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default SongPage;
