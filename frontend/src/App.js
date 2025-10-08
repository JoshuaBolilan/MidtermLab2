import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import MissionVision from './components/MissionVision';

function App() {
  return (
    <div className="App">
      <nav className='navi'>
        <p className="logo">Pamantasan ng Cabuyao</p>
        <div className='bttn'>
          <a href='#home'>Home</a>
          <a href='#MV'>Mission & Vision</a>
          <a href='#gallery'>Gallery</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </div>
      </nav>

      <div className='sec'>
        <section id='home'><Home /></section>
        <section id='MV'><MissionVision /></section>
        <section id='gallery'><Gallery /></section>
        <section id='about'><About /></section>
        <section id='contact'><Contact /></section>
      </div>

       <footer className="footer">
  <p>© 2025 Pamantasan ng Cabuyao | Group 2 Project</p>
</footer>
    </div>
  );
}

export default App;
