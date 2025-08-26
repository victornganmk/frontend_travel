import react, { useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './pages/global_components/Navbar';
import Wellington_About from './pages/wellington/Wellington_About';
import Prague_About from './pages/prague/Prague_About';
import Cusco_About from './pages/cusco/Cusco_About';
import Arusha_About from './pages/arusha/Arusha_About';
import Wellington_Attractions from './pages/wellington/Wellington_Attractions';
import Prague_Attractions from './pages/prague/Prague_Attractions';
import Cusco_Attractions from './pages/cusco/Cusco_Attractions';
import Arusha_Attractions from './pages/arusha/Arusha_Attractions';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wellington_about' element={<Wellington_About />}></Route>
        <Route path='/wellington_attractions' element={<Wellington_Attractions />}></Route>
        <Route path='/prague_about' element={<Prague_About />}></Route>
        <Route path='/prague_attractions' element={<Prague_Attractions />}></Route>
        <Route path='/cusco_about' element={<Cusco_About />}></Route>
        <Route path='/cusco_attractions' element={<Cusco_Attractions />}></Route>
        <Route path='/arusha_about' element={<Arusha_About />}></Route>
        <Route path='/arusha_attractions' element={<Arusha_Attractions />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
