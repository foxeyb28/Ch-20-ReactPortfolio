import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';

 function NavTabs() {
  return (
             <div>
              <Header/>
          <li>
            <Link to="/about">About</Link>
          </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/Resume">Resume</Link>
    </li>
      
     
      </div>
    
      );
}

 export default NavTabs;