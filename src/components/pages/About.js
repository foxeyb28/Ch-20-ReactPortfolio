import React from 'react';
import imageOfAlicia from '../../assets/alicia.jpeg';

export default function About() {
    return (
      <div className="container">
        <h1>About Me</h1>
        <img src={imageOfAlicia} alt="Alicia" className='Alicia'/>

        <p>
            My Name is Alicia. To start I have many talents that I like to call blessings. 
        Baking is at the top of the list and I can go on forever about it. I won't name all of the talents I posses. 
        Coding is a childhood dream of mines. 
        Hopefully I do well in this class, because I'm really enjyoing it.
        </p>
      </div>
    );
  }

