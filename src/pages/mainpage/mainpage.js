import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Carousel from '../../components/carousel/carousel';
import './mainpage.scss';
import MenuItem from '../../components/menu-item/menu-item';

import { connect } from 'react-redux'; 
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const MainPage = ({ sections }) => {
  return (
    <div className="mainpage-container">
      <Navigation/>
      <Carousel/>
      {sections.map( ({id,title,imageUrl, linkUrl}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
      ))}
      <div className="sale">Sales</div>  
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(MainPage);
