import SongCard from '../components/SongCard';

const mockSongs = [
  { id: '1', title: 'NU-VIKINGS', description: 'Steel and reverb.', image: '/placeholder.jpg' },
  { id: '2', title: 'rm -rf/our.love', description: 'Deleted by command.', image: '/placeholder.jpg' },
  { id: '3', title: 'Fork You', description: 'Merge conflict melody.', image: '/placeholder.jpg' },
  { id: '4', title: 'Ecoute?', description: 'A whisper in French static.', image: '/placeholder.jpg' },
  { id: '5', title: 'They Belong Here', description: 'Digital longing.', image: '/placeholder.jpg' },
  { id: '6', title: 'Elizabeth the Red', description: 'Celtic frost in vapor.', image: '/placeholder.jpg' },
];

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.background} />
      <div style={styles.grid}>
        {mockSongs.map((song) => (
          <div key={song.id} style={styles.cardWrapper}>
            <SongCard song={song} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#000',
    padding: '4rem 2rem',
    overflow: 'hidden',
  },
  background: {
    backgroundImage: 'url(/noise.png)',
    backgroundRepeat: 'repeat',
    opacity: 0.04,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },
  grid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Home;
