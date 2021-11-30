import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item'
import './directory.scss';
import { SECTIONS_DATA } from './sections';

class Directory extends Component {
  constructor() {
    super();
    this.state={
      sections: SECTIONS_DATA,
    }
  }

  render() {
    const {sections} = this.state;
    return(
      <div className='directory-menu'>
        {sections.map( ({id,title,imageUrl,size, linkUrl}) => (
          <MenuItem key={id} 
                    title={title} 
                    imageUrl={imageUrl} 
                    size={size}
                    linkUrl={linkUrl}  
          />
        ))}
      </div>
    )
  }
}
    
export default Directory;