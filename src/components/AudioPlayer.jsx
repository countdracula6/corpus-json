import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button onClick={togglePlay} style={styles.playButton}>
        {isPlaying ? <FaPause style={styles.icon} /> : <FaPlay style={styles.icon} />}
      </button>
      <div style={styles.progress}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '500px',
    margin: '2rem auto',
    backgroundColor: '#000',
    padding: '1rem 1.5rem',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 0 12px rgba(255, 0, 51, 0.2)'
  },
  playButton: {
    backgroundColor: '#ff0033',
    border: 'none',
    color: '#fff',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
  icon: {
  fontSize: '1.6rem',
  color: '#fff'
},

  progress: {
    flexGrow: 1,
    height: '8px',
    backgroundColor: '#222',
    borderRadius: '999px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(to right, #ff3366, #ff0033)',
    transition: 'width 0.2s ease'
  }
};

export default AudioPlayer;
