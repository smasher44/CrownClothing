import React from 'react';
import './carousel.scss';

const Carousel = () => {
  return ( //
    <div className="mainpage-image" style={{backgroundImage:`url(/images/carousel-img/carousel-img-1.jpg)`}}>
        <button className="carousel-btn carousel-btn-left">
        <svg
          className="carousel-btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="carousel-btn carousel-btn-right">
        <svg
          className="carousel-btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="dots">
        <button className="dot dot--fill">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
      </div>

    </div> 
  )
}




export default Carousel;
