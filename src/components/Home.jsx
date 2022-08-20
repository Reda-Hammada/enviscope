import React, { Fragment } from 'react';
import Header from './Header';
import References from './References';
import Projet from './Projet';
import Hero from './Hero';
import Competence  from './Competence';
import Contact from './Contact';
import Footer from './Footer';
import Comp from  './Comp';

function Home() {

  return (
    <Fragment >
        <Comp />
        <Header />
        <Hero />
        <Competence />
        <Contact />
        <Footer />

    </Fragment>



  );
}

export default Home;
