import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({title,routeName, items}) => {
  const navigate = useNavigate();
  return (
  <div className='collection-preview'>
    <h1 className='title' onClick={() => navigate(`/shop/${routeName}`)}>{title.toUpperCase()}</h1>
    <div className='preview'>
        {items.filter((item, idx) => idx < 4 )
              .map((item) => ( 
            <CollectionItem key={item.id} item={item}/>
            // note: item = {id,name,imageUrl,price}
        ))}
    </div>
  </div>
  )
}
  


export default CollectionPreview;