import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
//import NavTabs from './components/NavTabs';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (

    <div>
      <Header/>
      <Routes>

      <Route path='/' element={<Portfolio/>}/>
      <Route path='/' element={<About/>}/>
      <Route path='/' element={<Contact/>}/>
      <Route path='/' element={<Resume/>}/>
      </Routes>
<Footer/>


     
      <p>hello</p>
    </div>
  );
}

export default App;
