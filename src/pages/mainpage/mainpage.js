import React from 'react';
import './mainpage.scss';
import Navigation from '../../components/navigation/navigation';
import Carousel from '../../components/carousel/carousel';
import MenuItem from '../../components/menu-item/menu-item';
import OnSaleOverview from '../../components/onsale-preview/onsale-preview';

import { connect } from 'react-redux'; 
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

const MainPage = ({ sections, collections }) => {
  return (
    <div className="mainpage-container">
      <Navigation/>
      <Carousel/>
      {sections.map( ({id,title,imageUrl, linkUrl}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
      ))}
      { collections.map(({id, ...otherCollectionProps}) => ( 
      <OnSaleOverview key={id} {...otherCollectionProps}/> 
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections,
  collections: selectCollections
})

export default connect(mapStateToProps)(MainPage);
