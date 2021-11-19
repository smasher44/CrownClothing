import React, {Component} from 'react';
import './directory.scss';
import {sections} from './data'
import MenuItem from '../menu-item/menu-item'

class Directory extends Component {
    constructor() {
        super();
        this.state={
            sections: sections,
        }
    }

    render() {
        const {sections} = this.state;
        return(
            <div className='directory-menu'>
                {sections.map( ({id,title,imageUrl,size}) => (
                    <MenuItem key={id} 
                              title={title} 
                              imageUrl={imageUrl} 
                              size={size}  
                    />
                ))}
            </div>
        )
    }
}
    
export default Directory;