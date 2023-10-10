
import React  from 'react';

import imageOfAlicia from '../../assets/alicia.jpeg';
import ShoutOut from '../../assets/shout out.png';
import MovieReviewScreenShot from '../../assets/movie review screen shot.png';



 function Portfolio() {
  return (
    <div>    
    <h1>Portfolio</h1>
      <p>Here are some of my projects
          <img src={imageOfAlicia} alt="alicia" />
          <img src={ShoutOut} alt="shout out" />
          <img src={MovieReviewScreenShot} alt="movie review screen shot" />
        </p>
      
   </div>

  );
     
}
export default Portfolio;
