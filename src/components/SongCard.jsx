import { Link } from 'react-router-dom';
import { FaHeart, FaShareAlt, FaPlay } from 'react-icons/fa';

function SongCard({ song }) {
  return (
    <div style={styles.card}>
      <img src={song.image} alt={song.title} style={styles.image} />
      <h2 style={styles.title}>{song.title}</h2>
      <p style={styles.desc}>{song.description}</p>
      <div style={styles.icons}>
        <FaHeart style={styles.icon} title="Like" />
        <FaShareAlt style={styles.icon} title="Share" />
        <Link to={`/song/${song.id}`}>
          <FaPlay style={{ ...styles.icon, color: '#ff0033' }} title="Listen" />
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(255, 0, 50, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    fontFamily: "'Aldrich', sans-serif",
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '1.4rem',
    marginBottom: '0.3rem',
    color: '#ff0033',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '1rem',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '1.3rem',
  },
  icon: {
    cursor: 'pointer',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
};

export default SongCard;
