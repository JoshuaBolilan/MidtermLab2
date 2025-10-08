import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import MissionVision from './components/MissionVision';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navi'>
          <p className="logo">Pamantasan ng Cabuyao</p>
          <div className='bttn'>
            <Link to="/">Home</Link>
            <Link to="/mission-vision">Mission & Vision</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          
          </div>
        </nav>

        <div className='sec'>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </div>

        <footer className="footer">
          <p>© 2025 Pamantasan ng Cabuyao | Group 2 Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
