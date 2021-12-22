import React from 'react';
import './hero.scss';
import { Link } from 'react-router-dom';


function HeroPage() {
  return (
      <div className='header-2' 
      style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255, 0)), url(/images/background.jpg)`}}>
        <div className="header-container">
            <div className="header-container-inner">
              <h1>Freshen Up Your Look</h1>
              <p>
                A specialist label creating luxury essentials. Ethically crafted <br/>
                with an unwavering commitment to exceptional quality.
              </p>
              <Link className="btn btn-home" to='/'>SHOP NOW!</Link>
          </div>
        </div>
      </div>    
  );
}

export default HeroPage;