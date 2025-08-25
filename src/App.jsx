import React from 'react';
import Homepage from './homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './about/About';
import Collection from './collection/Collection';
import Whatsapp from './components/Whatsapp';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Whatsapp/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About/>} />
         <Route path="/collections" element={<Collection/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
