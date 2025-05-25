import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
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

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div style={styles.wrapper}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button onClick={togglePlay} style={styles.playButton}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div style={styles.barWrap}>
        <div style={styles.time}>{formatTime(currentTime)}</div>
        <div style={styles.barContainer}>
          <div style={{ ...styles.bar, width: `${progress}%` }} />
          <div style={styles.ecgOverlay} />
        </div>
        <div style={styles.time}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    margin: '2rem auto',
    gap: '1rem',
    flexWrap: 'wrap'
  },
 playButton: {
  backgroundColor: '#ff0033',
  border: 'none',
  color: '#fff',
  fontSize: '1.2rem',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 0 10px rgba(255, 0, 51, 0.4)',
  transition: 'transform 0.2s ease'
},

barContainer: {
  position: 'relative',
  flexGrow: 1,
  height: '18px',              // ⬅ Thicker
  backgroundColor: '#111',
  borderRadius: '9px',
  overflow: 'hidden',
  boxShadow: '0 0 6px rgba(255, 0, 51, 0.2) inset'
},

bar: {
  height: '100%',
  backgroundColor: '#ff0033',
  transition: 'width 0.2s linear',
  zIndex: 1,
  position: 'relative'
},

  ecgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '200%',
    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #ff0033 10px, #ff0033 12px)',
    animation: 'scrollECG 1.5s linear infinite',
    opacity: 0.2,
    zIndex: 0
  },
  time: {
    color: '#aaa',
    fontSize: '0.85rem',
    minWidth: '42px',
    textAlign: 'center'
  }
};

export default AudioPlayer;
