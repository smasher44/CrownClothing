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
        return(
            <div className='directory-menu'>
                {this.state.sections.map( (item) => (
                    <MenuItem key={item.id} 
                              title={item.title} 
                              imageUrl={item.imageUrl} 
                              size={item.size}  
                              />
                ))}
            </div>
        )
    }
}
    
export default Directory;