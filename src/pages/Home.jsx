import { useEffect, useState } from 'react';
import SongCard from '../components/SongCard';

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/songs.json')
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Home;
