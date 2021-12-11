import React from 'react';
import './collection.scss'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
//import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  let params = useParams();
  return (
    <div className='category'>
    {console.log(collection)}
      <h2>CURRENT PAGE : {params.category.toUpperCase()}</h2>
      {/* <CollectionItem/> */}
    </div>
  )
}

const mapStateToProps = (state, ownProps ) => {
  return (
    {collection: selectCollection(ownProps)(state) }
  )
}
 
  
export default connect(mapStateToProps)(CollectionPage);















