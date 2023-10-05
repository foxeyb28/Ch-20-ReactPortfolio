import React from 'react';
import NavTabs from 'react';

import { Link } from 'react-dom';

 function NavTabs() {
  return (
      <Nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link><a href="/components/Resume">Resume</a></Link>
    </li>
      
     
      </ul>
    </Nav>
      );
}

 export default NavTabs;