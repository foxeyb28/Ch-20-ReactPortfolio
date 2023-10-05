import React  from 'react';
import imageOfAlicia from '../../assets/alicia.jpeg';
import ShoutOut from '../../assets/shout out.png';
import MovieReviewScreenShot from '../../assets/movie review screen shot.png';


export default function Portfolio() {
    
   
   return (
     

    <div>
      <h1>Portfolio</h1>
      <p>Here are some of my projects</p>
      <img src={imageOfAlicia} alt="alicia" />
      <img src={ShoutOut} alt="Shout Out" />
      <img src={MovieReviewScreenShot} alt="MovieReviewScreenShot" />
       



   </div>
     
  
   )
};
