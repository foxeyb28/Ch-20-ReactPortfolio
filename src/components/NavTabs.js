import React from 'react';
 import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import handlePageChange from './Project';

function NavTabs({ currentPage, handlePageChange, about, contact, portfolio, resume }) {

  return (
    
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#About"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'BPortfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        );
      }


 export default NavTabs;