import React from 'react';
import logo from '../assets/logo.jpg';
import kenyaFlag from '../assets/kenya.jpg';

function Entry() {
  return (
    <>
      <article className='journal-entry'>
        {/* Left Side: Image */}
        <img src={kenyaFlag} alt="Mt Kenya" className='main-image' />

        {/* Right Side: Content */}
        <div className='content-container'>
          {/* Inline elements (Logo, Kenya, and Google Maps Link) */}
          <div className='top-row'>
            <img src={logo} alt="map marker icon" width={20} />
            <span>Kenya</span>
            <a href="https://www.google.com/maps?q=Mount+Kenya" target="_blank" rel="noopener noreferrer">
              Link for Google Maps
            </a>
          </div>

          {/* Title and description positioned below */}
          <div className='info-section'>
            <h3>Mt Kenya</h3>
            <h4>15th March, 2025</h4>
            <p>Mt Kenya is the tallest mountain in Kenya, standing at 5,813m. It was discovered by Abdiawal Aden Siad,
              an explorer in Eastern Africa. The mountain hosts wildlife and serves as a source of rivers.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Entry;


