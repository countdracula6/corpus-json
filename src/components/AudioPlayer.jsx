import { useRef, useState, useEffect } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';

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
      <button onClick={togglePlay} style={styles.playButton} aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? (
          <MdPause style={styles.icon} />
        ) : (
          <MdPlayArrow style={styles.icon} />
        )}
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
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 0 10px rgba(255, 0, 51, 0.1)'
  },
  playButton: {
    backgroundColor: '#ff0033',
    border: 'none',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    fontSize: '2.2rem',
    color: '#fff'
  },
  progress: {
    flexGrow: 1,
    height: '6px',
    backgroundColor: '#333',
    borderRadius: '999px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff0033',
    transition: 'width 0.2s ease'
  }
};

export default AudioPlayer;
