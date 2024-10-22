import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Search } from './pages/Search';
import { Contact } from './pages/Contact';

function App() {
    return(
      <>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    )
}

export default App
