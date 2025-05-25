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
      <div style={styles.playerBox}>
        <button onClick={togglePlay} style={styles.playButton}>
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <div style={styles.barContainer}>
          <div style={{ ...styles.bar, width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto'
  },
  playerBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#111',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(255, 0, 51, 0.15)'
  },
  playButton: {
    backgroundColor: 'transparent',
    border: '2px solid #ff0033',
    color: '#ff0033',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  barContainer: {
    flexGrow: 1,
    height: '12px',
    backgroundColor: '#333',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  bar: {
    height: '100%',
    backgroundColor: '#ff0033',
    transition: 'width 0.2s linear'
  }
};

export default AudioPlayer;
