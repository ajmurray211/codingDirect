import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import Home from './Pages/Home.js'
import Work from './Pages/Projects.js'
import Pricing from './Pages/Pricing.js'
import Contact from './Pages/Contact.js'
import About from './Pages/About.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Work />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
