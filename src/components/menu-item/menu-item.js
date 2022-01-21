import React from 'react';
import './menu-item.scss';
import { useNavigate } from "react-router-dom";

const MenuItem = ({id, title, imageUrl, linkUrl}) => {
  const navigate = useNavigate();
  return (
    <div className={`section-${id}`} onClick={() => navigate(`${linkUrl}`)}>
      <div className = "menu-item2">
        <div className='background-image2'
            style = {{backgroundImage:`url(${imageUrl})`}} 
          />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <div className='subtitle'>SHOP NOW</div>
        </div> 
      </div>
    </div>
  )
}


export default MenuItem;