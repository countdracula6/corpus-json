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
    width: '500px',
    height: '500px',
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
  },
  image: {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '1.4rem',
    margin: '0.5rem 0',
    color: '#ff0033',
  },
  desc: {
    fontSize: '0.9rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#ccc',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    fontSize: '1.3rem',
  },
  icon: {
    cursor: 'pointer',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
};

export default SongCard;
