import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import Education from './components/Education';
import './styles/App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route exact path='/' Component = { Home } />
        <Route exact path='/about' Component = { About } />
        <Route exact path='/qualification' Component = { Qualification } />
        <Route exact path='/skills' Component = { Skills } />
        <Route exact path='/project' Component = { Project } />
        <Route exact path='/contacts' Component={ Contacts } />
        <Route exact path='/education' Component={ Education } />

        <Route exact path='*' Component={ Home } />

      </Routes>
    </>
  );
}

export default App;
