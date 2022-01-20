import React from 'react';
import './onsale-preview.scss';
import OnSaleItem from '../onsale-item/onsale-item';

const OnSalePreview = ({items}) => {
  return (
    <div className="onsale__section sale">
    <div>FLASH SALE</div>
    <div>
      <div>Categories</div>
      <div>Ends in:</div>
    </div>

    {items.filter((item, idx) => idx < 13 )
          .map((item) => ( 
        <OnSaleItem key={item.id} item={item}/>
        // note: item = {id,name,imageUrl,price,newCollection,onSale}
    ))}

  </div>
  )
}

export default OnSalePreview;


/* <div className="onsale__card">
      <div>
      <img className="onsale__card-img" src={`/images/onsale-img/sale-img-2.jpg`} alt='shoes' />
        <div className="price-group">
          <div className="content-price-bold"><strong style={{
            color:"rgb(2, 121, 213)"}}>₱136</strong></div>
          <div style={{color:"rgb(177, 177, 177)"}}><strike>₱78</strike></div>
          <div style={{color:"rgb(255, 30, 30)"}}>35% off</div>
        </div>
      </div>
      <div className="onsale__card-content">
          <span className="content-title">Jordan Air</span>
          <div className="content-description">Get limited edition of jordan air,
            be classy while using a legendary brand.
          </div>
          <div className="shipping">Free Shipping</div>
          <span className="button">Buy Now</span>
      </div>
      <div className="banner">SALE</div>
    </div>

    <div className="onsale__card">
      <div>
      <img className="onsale__card-img" src={`/images/onsale-img/sale-img-3.jpg`} alt='shoes' />
        <div className="price-group">
          <div className="content-price-bold"><strong style={{color:"rgb(2, 121, 213)"}}>₱136</strong></div>
          <div style={{color:"rgb(177, 177, 177)"}}><strike>₱78</strike></div>
          <div style={{color:"rgb(255, 30, 30)"}}>35% off</div>
        </div>
      </div>
      <div className="onsale__card-content">
          <span className="content-title">Jordan Air</span>
          <div className="content-description">Get limited edition of jordan air,
            be classy while using a legendary brand.
          </div>
          <div className="shipping">Free Shipping</div>
          <span className="button">Buy Now</span>
      </div>
      <div className="banner">SALE</div>
    </div> */