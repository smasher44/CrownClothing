import React from 'react';
import './collections-overview.scss';
import CollectionPreview from '../collection-preview/collection-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
//import { Route } from 'react-router-dom';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
      { collections.map(({id, ...otherCollectionProps}) => ( 
      <CollectionPreview key={id} {...otherCollectionProps}/> 
      ))}
  </div>
) 

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)