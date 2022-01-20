import React from 'react';
import './collections-overview.scss';
import OnSale from '../onsale-preview/onsale-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';


const OnSaleOverview= ({ collections }) => (
  <div className='collections-overview'>
      { collections.map(({id, ...otherCollectionProps}) => ( 
      <OnSale key={id} {...otherCollectionProps}/> 
      ))}
  </div>
) 

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(OnSaleOverview)