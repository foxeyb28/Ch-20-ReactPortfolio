import React, { useState}  from 'react';
import NavTabs from '../NavTabs';
import imageOfAlicia from '../../assets/alicia.jpeg';
import ShoutOut from '../../assets/shout out.png';
import MovieReviewScreenShot from '../../assets/movie review screen shot.png';
import Contact from './Contact';
import Resume from './Resume';
import About from './About';


export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');
   
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div>
      {<><h1>Portfolio</h1><NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /><p>Here are some of my projects</p><img src={imageOfAlicia} alt="alicia" /><img src={ShoutOut} alt="Shout Out" /><img src={MovieReviewScreenShot} alt="MovieReviewScreenShot" /></>}
      {renderPage()} 
   </div>
      
   );
}
