import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import { Home, About, Search, Contact } from './pages';

function App() {
    return(
      <>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    )
}

export default App
