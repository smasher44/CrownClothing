import React, { Component } from 'react';
import './carousel.scss';

class Carousel extends Component {
  constructor(){
    super();
    this.state = {
      itemClassName: "carousel__photo",
      items: document.getElementsByClassName("carousel__photo"),
      totalItems: 4,
      slide: 0,
      moving:  true,
    };
  }
  render() {
  // console.log(this.state.items)
  return ( //
    <div className="mainpage-image">
      <div className="carousel">
          <img className="image-temporary" 
            src={`/images/carousel-img/carousel-img-1.jpg`} 
            alt="clothes"/>
          <img className="carousel__photo" 
            style={{backgroundImage:`url(/images/carousel-img/carousel-img-2.png)`}} 
            alt=""/>
          <img className="carousel__photo" 
            style={{backgroundImage:`url(/images/carousel-img/carousel-img-3.png)`}} 
            alt=""/>
          <img className="carousel__photo" 
            style={{backgroundImage:`url(/images/carousel-img/carousel-img-2.png)`}} 
            alt=""/>
      </div>
  
      <button className="carousel-btn carousel-btn-left carousel__button--prev">
        <svg
          className="carousel-btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="carousel-btn carousel-btn-right carousel__button--next">
        <svg
          className="carousel-btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
}




export default Carousel;
