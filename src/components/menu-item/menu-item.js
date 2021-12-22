import React from 'react';
import './menu-item.scss';
import { useNavigate } from "react-router-dom";

const MenuItem = ({id, imageUrl, linkUrl}) => {
  const navigate = useNavigate();
  return (
    <div className={`section-${id}`}>
      <div className = "menu-item2">
        <div className='background-image2'
            style = {{backgroundImage:`url(${imageUrl})`}} 
            onClick={() => navigate(`${linkUrl}`)}
            />
      </div>
    </div>
  )
}


export default MenuItem;