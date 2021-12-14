import React from 'react';
import './collection.scss'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
  let params = useParams();
  const collection = useSelector(selectCollection(params.category.toLowerCase()))
  // console.log('debug collection:', collection)
  return (  
    <div className='collection-page'>
      <h2 className='title'>{params.category.toUpperCase()}</h2>
      <div className='items'>
          {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

// const mapStateToProps = (state, ownProps ) => {
//   console.log('debug own props:', ownProps)
//   return (
//     {collection: selectCollection(ownProps)(state) }
//   )
// }
 
  
export default CollectionPage;

