import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';
import Howler from './pages/Howler';
import Contact from './pages/Contact';
import SongPage from './components/SongPage';

function App() {
  return (
    <Router>
      <div style={styles.wrapper}>
        <Navbar />
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/howler" element={<Howler />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/song/:id" element={<SongPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: "'Aldrich', sans-serif",
  },
  content: {
    flex: 1,
    paddingBottom: '2rem',
  },
};

export default App;
