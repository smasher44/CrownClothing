import React from 'react';
import { connect } from 'react-redux';
import './collection-item.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl, newCollection, onSale } = item;
  return (
    <div className='collection-item'>
      <div className={` ${newCollection ? 'collection-item-banner' : 'collection-item-banner-none'} `}>NEW COLLECTION</div>
      <img className={` ${onSale ? 'onsale-banner' : 'onsale-banner-none'} `} src={`/images/onsale.png`} alt='banner'/>
      <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="content">
      <div className="content-title">
        <span>{name}</span>
      </div>
      <div className="content-price">
        <div className="content-price-bold"><strong style={{color:`rgb(2, 121, 213)`}}>₱{price}</strong></div>
        <div className="content-price-percent">
          <div style={{color:`rgb(177, 177, 177)`}}><strike>₱78</strike></div>
          <div style={{color:`rgb(255, 30, 30)`}}>35% off</div>
        </div>
      </div>
    </div>
    <span onClick={()=> addItem(item)} className="button">Add to Cart</span>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})


export default connect(null,mapDispatchToProps)(CollectionItem);