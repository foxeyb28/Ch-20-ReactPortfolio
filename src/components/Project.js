import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

export default function Projects() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

        </div>

    );

}