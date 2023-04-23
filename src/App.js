import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';

import './styles/App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component = { Home } />
        <Route exact path='/about' Component = { About } />
        <Route exact path='/contacts' Component={ Contacts } />
        <Route exact path='*' Component={ Home } />
      </Routes>
    </>
  );
}

export default App;
