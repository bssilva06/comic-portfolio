import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Webcomics from './pages/Webcomics';
import News from './pages/News';
import Writing from './pages/Writing';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import FaeRingCollective from './pages/FaeRingCollective';
import Archive from './pages/Archive';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style = {{width: '100%'}}>
        <Navbar />
        <main style={{width: '100%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/webcomics" element={<Webcomics />} />
            <Route path="/news" element={<News />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fae-ring-collective" element={<FaeRingCollective />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;