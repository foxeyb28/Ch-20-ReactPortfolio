import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import NavTabs from './components/NavTabs';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';

function App() {
 return (
      <div className="portfolio-app">

<Header/>
            <About />;
            <Contact />;
            <Resume />;
            <Portfolio />;
            <Footer />;
            <NavTabs />;
      </div>
 );     
} 

           
   

 


export default App;
