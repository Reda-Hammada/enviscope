import React from 'react';
import { BrowserRouter as Router,Routes, Route}  from 'react-router-dom';
import Home from './components/Home';
import  './App.css';
import References from './components/References';
import Projet from './components/Projet';

function App() {

  return ( 

    <Router >
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/references' element={<References />} />
      <Route path='projet' element={<Projet />} />

    </Routes>
    </Router>

  );
}

export default App;
