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
        console.log(this.state.sections[0].title)
        return(
            <div className='directory-menu'>
                {this.state.sections.map( (item) => (
                    <MenuItem key={item.id} title={item.title} />
                 ) )}
            </div>
        )
    }
}
    
export default Directory;