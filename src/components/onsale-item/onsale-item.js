import React from 'react';
import './onsale-item.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const OnSaleItem = ({item, addItem}) => {
  // const {id,name,imageUrl,price,newCollection,onSale}} = item;
  const { name, price , onSale } = item;
  console.log(item)
  return ( onSale ? 
    (<div className="onsale__card">
    <div>
      <img className="onsale__card-img" src={`/images/onsale-img/sale-img-1.jpg`} alt='women'/>
      <div className="price-group">
        <div className="content-price-bold"><strong style={{color:"rgb(2, 121, 213)"}}>{ price }</strong></div>
        <div style={{color:"rgb(177, 177, 177)"}}><strike>39</strike></div>
        <div style={{color:"rgb(255, 30, 30)"}}>35% off</div>
      </div>
    </div>
    <div className="onsale__card-content">
        <span className="content-title">{name}</span>
        <div className="content-description">Get limited edition of jordan air,
          be classy while using a legendary brand.
        </div>
        <div className="shipping">Free Shipping</div>
        <span className="button" onClick={()=> addItem(item)}>Buy Now</span>
    </div>
    <div className="banner">SALE</div>
  </div> ) : null
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})


export default connect(null,mapDispatchToProps)(OnSaleItem);