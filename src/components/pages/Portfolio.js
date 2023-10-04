import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import About from './pages/About';
import Resume from './pages/Blog';
import Contact from './pages/Contact';


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');   
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <About />;
        }
        if (currentPage === 'About') {
          return <Contact />;
        }
        if (currentPage === 'Blog') {
          return <Resume />;
        }
        
      };
      const handlePageChange = (page) => setCurrentPage(page);

    return (
         <>
         <div>

            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
        <div className="container projeContainer">
                <h1>Portfolio</h1>
                <p>Here are some of my current projects:</p>
                <a href=" https://github.com/foxeyb28/MovieReviews/blob/main/barbie.png"></a>
                <a href=" https://github.com/gulledgecorey/music-blog"></a>
                <a href="https://github.com/foxeyb28/EmpTrack-ch12"></a>
                <a href="https://github.com/foxeyb28/Ch-12-EmployeeTracker"></a>

            </div></>
    );
}
