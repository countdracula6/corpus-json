import { useRef, useState, useEffect } from 'react';

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
    <div style={styles.container}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <div style={styles.controls}>
        <button onClick={togglePlay} style={styles.button}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '480px',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#111',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    color: '#fff'
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  button: {
    backgroundColor: '#ff0033',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.4rem',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  progressBar: {
    width: '100%',
    height: '12px',
    backgroundColor: '#333',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff0033',
    transition: 'width 0.2s ease-in-out'
  }
};

export default AudioPlayer;
