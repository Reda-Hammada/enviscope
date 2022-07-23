import React from 'react';

import Header from './components/Header';
import References from './components/References';
import Projet from './components/Projet';
import Hero from './components/Hero';
import Competence  from './components/Competence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  './App.css';

function App() {

  return (
      <div className="App">
        <Header />
        <Hero />
        <Competence />
        <Contact />
        <Footer />
       
      </div>



  );
}

export default App;
