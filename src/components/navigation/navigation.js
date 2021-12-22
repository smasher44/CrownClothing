import React from 'react';
import './navigation.scss';
import { useNavigate } from "react-router-dom";


function Navigation() {
  const navigate = useNavigate();
  return(
    <div className="nav">
      <div className="title"> Categories</div>
        <div className="inner-nav">
          <ul>
            <li><p onClick={() => navigate("shop/hats")}>Hats</p></li>
            <li><p onClick={() => navigate("shop/jackets")}>Jackets</p></li>
            <li><p onClick={() => navigate("shop/sneakers")}>Sneakers</p></li>
            <li><p onClick={() => navigate("shop/womens")}>Womens</p></li>
            <li><p onClick={() => navigate("shop/mens")}>Mens</p></li>
            <li><p onClick={() => navigate("#")}>Accersories</p></li>
            <li><p onClick={() => navigate("#")}>Others</p></li>
          </ul>
       </div>
    </div>
  )
}


export default Navigation;