import { Link } from 'react-router-dom';
import { FaHeart, FaShareAlt, FaPlay } from 'react-icons/fa';

function SongCard({ song }) {
  const handleLike = () => {
    alert(`You liked: ${song.title}`);
  };

  const handleShare = () => {
    const url = `${window.location.origin}/song/${song.id}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={song.image} alt={song.title} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{song.title}</h2>
        <p style={styles.desc}>
          {song.description.split('\n')[0]}
        </p>
        <div style={styles.icons}>
          <FaHeart style={styles.icon} title="Like" onClick={handleLike} />
          <FaShareAlt style={styles.icon} title="Share" onClick={handleShare} />
          <Link to={`/song/${song.id}`}>
            <FaPlay style={{ ...styles.icon, color: '#ff0033' }} title="Listen" />
          </Link>
        </div>
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
    boxShadow: '0 0 20px rgba(255, 0, 50, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Aldrich', sans-serif",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  imageWrapper: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  content: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: '1.5rem',
    color: '#ff0033',
    margin: 0,
    textAlign: 'center',
  },
  desc: {
    fontSize: '0.95rem',
    color: '#ccc',
    margin: 0,
    lineHeight: '1.5',
    textAlign: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    fontSize: '1.3rem',
  },
  icon: {
    cursor: 'pointer',
    color: '#aaa',
    transition: 'color 0.3s ease, transform 0.2s ease',
  },
};

export default SongCard;
